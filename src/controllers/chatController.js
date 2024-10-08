const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const sendMessage = async (req, res) => {
    try {
        const { messages, chatType, scenarioDetails } = req.body;
        if (!messages || !Array.isArray(messages) || !chatType) {
            return res.status(400).json({ error: "Invalid input. Expected an array of messages and a chat type." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const lastUserMessage = messages.filter(msg => msg.role === "user").pop();

        let contextPrompt = "";
        if (chatType === "main") {
            contextPrompt = `You are Sophia, an AI language tutor designed to help users practice English through friendly conversation. Your goal is to engage the user in natural dialogue while gently correcting any language mistakes and offering suggestions for improvement. Be encouraging, patient, and adapt your language level to the user's proficiency. Occasionally, introduce new vocabulary or idioms and explain their usage.`;
        } else if (chatType === "roleplay" && scenarioDetails) {
            const { aiName, aiRole, scenarioTitle, userRole, objectives } = scenarioDetails;
            contextPrompt = `You are ${aiName}, a ${aiRole} in a roleplay scenario about ${scenarioTitle}. The user is playing the role of ${userRole}. 

Objectives:
${objectives.map(obj => `- ${obj}`).join('\n')}

While staying in character, your primary goal is to help the user practice English. Engage in natural dialogue work towards the objectives. Gently correct any language mistakes and offer suggestions for improvement. Adapt your language to fit both your character and the user's proficiency level.`;
        } else {
            return res.status(400).json({ error: "Invalid chat type or missing scenario details for roleplay." });
        }

        const prompt = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `${contextPrompt}

Please provide two things:
1. A conversational response to continue the dialogue, staying true to your character and the scenario context. Most of the time, keep the max length of the response in 2 sentences. Sometimes, it can be longer but not too often. Guide the conversation towards the scenario objectives. [ Note: Don't put any asterisk or any special symbols.]
2. Feedback on the user's last message, including a corrected version (if needed) and an explanation about any mistakes. Be very careful and precise in your feedback. Only suggest corrections for actual grammatical errors or inappropriate word usage. Do not change stylistic choices that are grammatically correct.

Format your response as follows:
---
Conversation Response: [Your conversational response here]
---
Feedback:
Corrected Version: [Corrected version of the user's last message, or "No correction needed" if it's correct][ Note: Don't put any asterisk or any special symbols; don't correct capitalized errors or missing punctuation]
Explanation: [Your explanation of any corrections or comments on the user's language use, or "The message is grammatically correct and well-structured." if no correction is needed]
[ Note: don't correct capitalized errors or missing punctuation. Don't put any asterisk or any special symbols. Be very careful not to suggest unnecessary changes to correct sentences.]
---

Here's the conversation history:
${messages.map(msg => `${msg.role.toUpperCase()}: ${msg.content}`).join('\n')}

Remember to maintain a friendly, encouraging tone in both your conversation response and feedback, while staying true to your character and the scenario context. Be absolutely certain about any corrections you suggest, and if there are no errors, praise the user for their correct usage.`
                        }
                    ]
                }
            ]
        };

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        const sections = responseText.split('---').filter(section => section.trim() !== '');
        
        let reply = '';
        let feedback = {
            correctedVersion: lastUserMessage.content,
            explanation: "Unable to generate feedback at this time.",
            isCorrect: false
        };

        sections.forEach(section => {
            if (section.includes('Conversation Response:')) {
                reply = section.replace('Conversation Response:', '').trim();
            } else if (section.includes('Feedback:')) {
                const feedbackLines = section.split('\n').filter(line => line.trim() !== '');
                feedbackLines.forEach(line => {
                    if (line.startsWith('Corrected Version:')) {
                        feedback.correctedVersion = line.replace('Corrected Version:', '').trim();
                        feedback.correctedVersion = feedback.correctedVersion.replace(/\*/g, '');
                        feedback.isCorrect = feedback.correctedVersion === "No correction needed";
                    } else if (line.startsWith('Explanation:')) {
                        feedback.explanation = line.replace('Explanation:', '').trim();
                        if (feedback.explanation.includes("grammatically correct")) {
                            feedback.isCorrect = true;
                        }
                    }
                });
            }
        });

        res.json({ reply, feedback });
    } catch (error) {
        console.error('Error in chat API:', error);
        res.status(500).json({ error: "Failed to generate response." });
    }
};

module.exports = {
    sendMessage
};