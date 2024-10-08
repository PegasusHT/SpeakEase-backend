const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');
const AIMate = mongoose.model('AIMate');

// Get all options with their relationships
const getOptions = async (req, res) => {
    try {
        const scenarios = await Scenario.find().select('userRole');
        
        // Define the main categories
        const mainCategories = {
            "Student": ["Elementary Student", "High School Student", "College Student"],
            "Professional": ["Software Developer", "Financial Advisor", "Healthcare Professional", "Sales Representative"],
            "Traveler": ["Tourist", "Cultural Explorer"],
            "Resident": ["Newcomer/Immigrant", "Local Resident", "Parent/Guardian"]
        };

        // Create a set of unique user roles
        const uniqueRoles = new Set(scenarios.map(scenario => scenario.userRole));

        res.json({
            mainCategories,
            roles: Array.from(uniqueRoles)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get scenarios for a specific user role
const getScenariosByRole = async (req, res) => {
    const { role } = req.query;
    try {
        const scenarios = await Scenario.find({ userRole: role })
            .select('id title image isNew context');
        res.json(scenarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Get scenario details
const getScenarioDetails = async (req, res) => {
    try {
        const scenarioId = req.params.stringId;
        
        if (!mongoose.Types.ObjectId.isValid(scenarioId)) {
            return res.status(400).json({ message: 'Invalid scenario ID' });
        }

        let scenario = await Scenario.findById(scenarioId);
        
        if (!scenario) {
            return res.status(404).json({ message: 'Scenario not found' });
        }

        // Fetch the AIMate information
        if (scenario.aiMateId) {
            const aiMate = await AIMate.findById({ _id: scenario.aiMateId });
            if (aiMate) {
                scenario = scenario.toObject(); 
                scenario.aiMate = {
                    ...aiMate.toObject(),
                    role: scenario.aiMateRole, 
                    traits: aiMate.traits.split(',').map(trait => trait.trim()) // Convert traits to array
                };
                // remove response secret fields
                delete scenario.aiMateId;  
                delete scenario.aiMateRole;  
            } else {
                console.log('AIMate not found for name:', scenario.aiMateId);
            }
        } else {
            console.log('aiMateName is null or undefined in the scenario');
        }

        res.json(scenario);
    } catch (error) {
        console.error('Error in getScenarioDetails:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    getOptions,
    getScenariosByRole,
    getScenarioDetails
};