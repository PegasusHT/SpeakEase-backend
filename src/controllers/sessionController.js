const express = require("express");
const router = express.Router();
const Scenario = require('../models/scenario');
const AIMate = require('../models/aiMate');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const create = async (req, res) => {
    try {
        const { scenarioId, customScenario, aiName, primaryRole, traits, context, userRole, objectives } = req.body;

        if (scenarioId && scenarioId !== 'custom') {
            // Handling roleplay scenario
            const scenario = await Scenario.findById(scenarioId);

            if (!scenario) {
                console.log(`Scenario not found for ID: ${scenarioId}`);
                return res.status(404).json({ error: "Scenario not found." });
            }

            const { title, aiMateId, userRole: scenarioUserRole, context: scenarioContext, objectives: scenarioObjectives } = scenario;
            
            if (!aiMateId) {
                console.log(`AI Mate not found for scenario: ${scenarioId}`);
                return res.status(400).json({ error: "AI Mate not found for this scenario." });
            }

            const { name, primaryRole, traits } = await AIMate.findById(aiMateId);

            if (!name || !primaryRole || !traits) {
                return res.status(400).json({ error: "Invalid AI Mate data." });
            }

            const greetingMessage = await generateDynamicGreeting(name, primaryRole, traits, title, scenarioUserRole, scenarioContext);

            return res.json({ greetingMessage, scenarioContext, scenarioObjectives });
        } else if (customScenario) { 
            // Handling custom scenario
            const greetingMessage = await generateCustomScenarioGreeting(aiName, primaryRole, traits, userRole, objectives, customScenario);
            return res.json({ greetingMessage, scenarioContext: customScenario, scenarioObjectives: objectives });
        } else if (aiName && primaryRole && traits && context) {
            // Handling Sophia's main chat
            const greetingMessage = generateSophiaGreeting(aiName, primaryRole, traits, context);
            return res.json({ greetingMessage, scenarioContext: context, scenarioObjectives: [] });
        } else {
            console.log("Invalid request parameters:", req.body);
            return res.status(400).json({ error: "Invalid request parameters." });
        }
    } catch (error) {
        console.error('Error generating greeting message:', error);
        res.status(500).json({ error: "Failed to generate greeting message." });
    }
};

async function generateDynamicGreeting(name, role, traits, title, userRole, context) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = {
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: `Generate a brief, engaging greeting for an English practice scenario. The AI's name is ${name}, and their role is ${role}. Their traits are: ${traits}. The scenario title is "${title}", the user's role is ${userRole}, and the context is "${context}".

The greeting should:
1. Be in character for the AI's role (${role})
2. Directly address the specific scenario context
3. Encourage the user to start the conversation within the scenario
4. Be 1-2 sentences long (maximum 3)
5. Sound natural and conversational

Example: If the context is "Present your favorite toy or book to the class" and the AI's role is "School Teacher", a greeting might be:
"Good morning, class! Who's ready to share their favorite toy or book with us today? I can't wait to see what you've brought!"

[Note: Don't use asterisks or any special symbols. Create a unique greeting based on the given scenario, don't copy the example.]`
                    }
                ]
            }
        ]
    };

    try {
        const result = await model.generateContent(prompt);
        return result.response.text().trim();
    } catch (error) {
        console.error('Error generating dynamic greeting:', error);
        return `Hello! I'm ${name}, your ${role} for today's ${context} adventure. How can I assist you?`;
    }
}

async function generateCustomScenarioGreeting(aiName, aiRole, aiTraits, userRole, objectives, customScenario) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = {
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: `Generate a brief, engaging greeting for a custom English practice scenario. The AI's name is ${aiName}, and their role is ${aiRole}. Their traits are: ${aiTraits}. The user's role is ${userRole}. The scenario is: "${customScenario}".

The greeting should:
1. Be in character for the AI's role (${aiRole})
2. Directly address the specific scenario context
3. Encourage the user to start the conversation within the scenario
4. Be 1-2 sentences long (maximum 3)
5. Sound natural and conversational

[Note: Don't use asterisks or any special symbols. Create a unique greeting based on the given scenario.]`
                    }
                ]
            }
        ]
    };

    try {
        const result = await model.generateContent(prompt);
        return result.response.text().trim();
    } catch (error) {
        console.error('Error generating custom greeting:', error);
        return `Hello! I'm ${aiName}, ready to help you practice English in this custom scenario. Let's get started!`;
    }
}

function generateSophiaGreeting(name, role, traits, context) {
    const traitArray = traits.split(',').map(trait => trait.trim());
    
    const intros = [
        `Hey there! 👋 I'm ${name}, your English language buddy!`,
        `Hi! I'm ${name}, and I'm here to help you practice English.`,
        `Hello! ${name} here, ready to be your English language buddy.`
    ];

    const selectedIntro = intros[Math.floor(Math.random() * intros.length)];

    const traitPhrases = {
        friendly: "I'm super excited to chat with you today!",
        patient: "Take your time, there's no rush in our conversations.",
        encouraging: "Every mistake is a chance to learn something new!",
    };

    const selectedTrait = traitArray[Math.floor(Math.random() * traitArray.length)];
    const traitPhrase = traitPhrases[selectedTrait] || "";

    const prompts = [
        "Feel free to ask me anything or choose a topic below!",
    ];

    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    return `${selectedIntro} ${traitPhrase} ${selectedPrompt}`;
}

module.exports = {
    create
};