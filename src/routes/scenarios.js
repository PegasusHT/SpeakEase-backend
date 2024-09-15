const express = require('express');
const router = express.Router();
const {
    getOptions,
    getByRoleContext,
    getScenarioDetails
} = require('../controllers/scenariosController');

// Get all unique roles and contexts
router.get('/options', getOptions);

// Get scenarios by role and context
router.get('/by-role-context', getByRoleContext);

// Get scenario details
router.get('/:id', getScenarioDetails);

module.exports = router;