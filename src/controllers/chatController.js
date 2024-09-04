const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const sendMessage = async (req, res) => {
    try {
        const { messages } = req.body;
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: "Invalid input. Expected an array of messages." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: "You are Mia, an AI language tutor designed to help users practice English through friendly conversation. Your goal is to engage the user in natural dialogue while gently correcting any language mistakes and offering suggestions for improvement. Be encouraging, patient, and adapt your language level to the user's proficiency. Occasionally, introduce new vocabulary or idioms and explain their usage."
                        }
                    ]
                },
                ...messages.map(msg => ({
                    role: msg.role === "user" ? "user" : "model",
                    parts: [
                        {
                            text: msg.content
                        }
                    ]
                }))
            ]
         };

        const result = await model.generateContent(prompt);
        const reply = result.response.text();

        res.json({ reply });
    } catch (error) {
        console.error('Error in chat API:', error);
        res.status(500).json({ error: "Failed to generate response." });
    }
};

module.exports = {
    sendMessage
};