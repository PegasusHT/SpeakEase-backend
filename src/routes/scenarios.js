const express = require('express');
const router = express.Router();
const {
    getOptions,
    getScenariosByRole,
    getScenarioDetails,
} = require('../controllers/scenariosController');

// Get all unique roles and contexts
router.get('/options', getOptions);

// Get scenarios by role 
router.get('/by-role', getScenariosByRole);

// Get scenario details
router.get('/:stringId', getScenarioDetails);

module.exports = router;