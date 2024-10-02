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

            const greetingMessage = generateDynamicGreeting(name, primaryRole, traits, title, scenarioUserRole, scenarioContext);

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

function generateDynamicGreeting(name, role, traits, title, userRole, context) {
    const traitArray = traits.split(',').map(trait => trait.trim());
    
    // Introductory phrases based on traits
    const intros = {
        helpful: [`Hey there! I'm ${name}, your go-to ${role} for all things ${context}. How can I brighten your day?`,
                  `Welcome! ${name} here, ready to help you navigate the world of ${context}. What can I do for you?`],
        patient: [`Hi, I'm ${name}. Take all the time you need as we explore ${context} together. What's on your mind?`,
                  `Hello there! ${name} speaking. I'm here to guide you through ${context} at your own pace. Where shall we begin?`],
        knowledgeable: [`Greetings! I'm ${name}, your fountain of knowledge for all things ${context}. What would you like to learn today?`,
                        `Welcome! ${name} here, bringing you expert insights on ${context}. What aspect intrigues you most?`],
        friendly: [`Hey, friend! ${name} here, your buddy in the world of ${context}. Ready for some fun?`,
                   `Hi there! It's ${name}, your friendly neighborhood ${role}. Let's make ${context} exciting together!`],
        efficient: [`Hello! ${name} at your service. Let's dive right into ${context} and make the most of our time. What's our goal?`,
                    `Hi there! ${name} here, ready to streamline your ${context} experience. What can we accomplish today?`],
        attentive: [`Hello! This is ${name}, and I'm all ears. What aspect of ${context} can I help you with today?`,
                    `Hi there! ${name} speaking, and you have my full attention. What ${context} matters are we focusing on?`],
        vigilant: [`Greetings! ${name} here, your watchful ${role} in the realm of ${context}. How can I assist you today?`,
                   `Hello! This is ${name}, always on alert in the world of ${context}. What situation can I help you with?`],
        calm: [`Hello there. This is ${name}, your calm guide through the waters of ${context}. How may I help you today?`,
               `Greetings. ${name} here, bringing a sense of peace to your ${context} experience. What would you like to discuss?`],
        professional: [`Good day. I'm ${name}, your professional consultant for ${context}. How may I be of assistance?`,
                       `Welcome. This is ${name}, bringing professional expertise to your ${context} needs. What can I help you with?`],
        enthusiastic: [`Hi there! I'm ${name}, and I'm SUPER excited to dive into ${context} with you! What awesome plans do you have?`,
                       `Hey! ${name} here, and I'm thrilled to be your guide in the amazing world of ${context}! Ready to get started?`],
        creative: [`Hello, creative soul! ${name} here, ready to paint the canvas of ${context} with you. What masterpiece shall we create today?`,
                   `Hi there! It's ${name}, your inspiration in the realm of ${context}. What innovative ideas are we exploring?`],
        energetic: [`Hey there, dynamo! ${name} here, ready to power through ${context} with you. What energizing plans do you have?`,
                    `Hi! It's ${name}, your high-voltage partner in ${context}. Ready to electrify your experience?`],
        motivating: [`Hello, champion! ${name} here, ready to fuel your journey through ${context}. What goals are we crushing today?`,
                     `Hey there! It's ${name}, your personal cheerleader in the world of ${context}. Ready to reach new heights?`],
        supportive: [`Hi there! ${name} here, your support system in navigating ${context}. Remember, I've got your back!`,
                     `Hello! This is ${name}, here to provide a strong foundation for your ${context} journey. How can I support you today?`],
        charismatic: [`Well, hello there! The one and only ${name} at your service. Ready to make ${context} absolutely unforgettable?`,
                      `Greetings, fabulous! ${name} here, about to sprinkle some magic on your ${context} experience. Shall we begin the show?`],
        organized: [`Hello there! ${name} here, ready to bring order to the exciting world of ${context}. What's first on our agenda?`,
                    `Hi! It's ${name}, your master planner in the realm of ${context}. Ready to structure our approach?`],
        'quick-thinking': [`Hey there! ${name} here, ready to tackle any ${context} challenge that comes our way. What's our first move?`,
                           `Hello! This is ${name}, your rapid-response expert in ${context}. What situation are we solving today?`],
        caring: [`Hello there! This is ${name}, and I'm here to ensure your ${context} experience is as comfortable as possible. How can I care for you today?`,
                 `Hi! ${name} speaking, bringing a heartfelt approach to your ${context} journey. How may I support you?`],
        'detail-oriented': [`Greetings! ${name} here, ready to fine-tune every aspect of your ${context} experience. What details shall we perfect today?`,
                            `Hello! This is ${name}, your precision expert in ${context}. Ready to dive into the nitty-gritty?`],
        analytical: [`Hello there. ${name} speaking, prepared to dissect and analyze all aspects of ${context} with you. What shall we examine first?`,
                     `Greetings. This is ${name}, bringing analytical prowess to your ${context} queries. What data are we crunching today?`],
        passionate: [`Hi there! ${name} here, absolutely thrilled to delve into the world of ${context} with you. What aspect are you most passionate about?`,
                     `Hello, enthusiast! It's ${name}, and I'm burning with excitement to explore ${context} together. What ignites your curiosity?`],
        adventurous: [`Hey there, fellow adventurer! ${name} here, ready to embark on an epic ${context} journey with you. Where shall we explore first?`,
                      `Greetings, thrill-seeker! ${name} speaking, geared up for an exhilarating ${context} expedition. Ready to chart unknown territories?`]
    };

    // Select a random intro based on a matching trait, or use a default if no match
    const matchingTrait = traitArray.find(trait => intros[trait]);
    const selectedIntro = matchingTrait 
        ? intros[matchingTrait][Math.floor(Math.random() * intros[matchingTrait].length)]
        : `Hello! I'm ${name}, your ${role} for today's ${context} adventure. How can I assist you?`;

    // Add a scenario-specific line
    const scenarioLine = `We're about to dive into "${title}" where you'll be taking on the role of ${userRole}.`;

    // Add an engaging question or prompt
    const prompts = [
        `What aspect of ${context} fascinates you the most?`,
        `Do you have any exciting goals for our ${context} session today?`,
        `Is there anything specific about ${context} that you've always wanted to know?`,
        `What inspired you to explore ${context} today?`,
        `Are you ready to uncover some hidden gems in the world of ${context}?`
    ];
    const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    // Combine all parts
    return `${selectedIntro} ${scenarioLine} ${selectedPrompt}`;
}

async function generateCustomScenarioGreeting(aiName, aiRole, aiTraits, userRole, objectives, customScenario) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = {
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: `Generate a friendly and engaging greeting for a custom English practice scenario. The AI assistant's name is ${aiName}, and their role is ${aiRole}. Their traits are: ${aiTraits}. The user's role is ${userRole}. The objectives of the conversation are: ${objectives.join(', ')}. The user provided this scenario: "${customScenario}".

The greeting should:
1. Be warm and welcoming
2. Briefly mention the AI's role and one or two key traits
3. Acknowledge the user's role or the scenario they provided
4. Encourage the user to start the conversation
5. Be concise (2-3 sentences)

[Note: Don't use asterisk or any special symbols. Do not explicitly repeat the entire scenario or objectives. Instead, creatively incorporate elements of them into the greeting.]`
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
        `Hey there! 👋 I'm ${name}, your ${role}!`,
        `Hi! I'm ${name}, and I'm here to help you practice English.`,
        `Hello! ${name} here, ready to be your English language buddy.`
    ];

    const selectedIntro = intros[Math.floor(Math.random() * intros.length)];

    const traitPhrases = {
        friendly: "I'm super excited to chat with you!",
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