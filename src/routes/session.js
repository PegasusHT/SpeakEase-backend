const express = require('express');
const router = express.Router();
const { create } = require('../controllers/sessionController');

router.post('/', create);

module.exports = router;