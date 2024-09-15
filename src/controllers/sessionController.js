const express = require("express");
const router = express.Router();
const fs = require("fs");

const greetingMessage= `Hey there! 👋 I'm Mia, your friendly English practice buddy!  😊  Ask me anything or select a topic below: `

const create = async (req, res) => {
    try {
        res.json({ greetingMessage: greetingMessage});
    } catch (error) {
        console.log('err: ', error)
        res.status(500).json({ error: "Failed to generate greeting message." });
    }
};

module.exports = {
    create
};