// routes/auth.js
const express = require('express');
const router = express.Router();
const { oauthAuth } = require('../controllers/authController');

router.post('/oauth', oauthAuth);

module.exports = router;