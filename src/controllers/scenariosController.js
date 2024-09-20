const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');
const AIMate = mongoose.model('AIMate');

// Get all options with their relationships
const getOptions = async (req, res) => {
    try {
        const scenarios = await Scenario.find().select('userRole context');
        
        // Create a map of roles to contexts
        const roleContextMap = {};
        scenarios.forEach(scenario => {
            if (!roleContextMap[scenario.userRole]) {
                roleContextMap[scenario.userRole] = new Set();
            }
            roleContextMap[scenario.userRole].add(scenario.context);
        });

        // Convert sets to arrays
        for (let role in roleContextMap) {
            roleContextMap[role] = Array.from(roleContextMap[role]);
        }

        // Get unique roles and contexts
        const roles = Object.keys(roleContextMap);
        const contexts = Array.from(new Set(scenarios.map(s => s.context)));

        res.json({
            roles,
            contexts,
            roleContextMap
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get scenarios by role and context
const getByRoleContext = async (req, res) => {
    const { role, context } = req.query;
    try {
        const scenarios = await Scenario.find({ userRole: role, context: context })
            .select('id title image isNew');
        res.json(scenarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get scenario details
const getScenarioDetails = async (req, res) => {
    try {
        const scenarioId = parseInt(req.params.id);
        
        if (isNaN(scenarioId)) {
            return res.status(400).json({ message: 'Invalid scenario ID' });
        }

        let scenario = await Scenario.findOne({ id: scenarioId });
        
        if (!scenario) {
            return res.status(404).json({ message: 'Scenario not found' });
        }

        // Attempt to manually populate aiRole
        if (scenario.aiRole) {
            const aiMate = await AIMate.findById(scenario.aiRole);
            
            if (aiMate) {
                scenario = scenario.toObject(); // Convert to a plain JavaScript object
                aiMate.traits = aiMate.traits.split(',').map(trait => trait.trim()); // Convert traits to array
                scenario.aiRole = aiMate;
            } else {
                console.log('AIMate not found for ID:', scenario.aiRole);
            }
        } else {
            console.log('aiRole is null or undefined in the scenario');
        }

        res.json(scenario);
    } catch (error) {
        console.error('Error in getScenarioDetails:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = {
    getOptions,
    getByRoleContext,
    getScenarioDetails
};