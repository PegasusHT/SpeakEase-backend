const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

require('./models/aiMate');
require('./models/scenario');

const sessionRoutes = require('./routes/session')
const chatRoutes = require('./routes/chat')
const scenariosRoutes = require('./routes/scenarios'); 

const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/session', sessionRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/scenarios', scenariosRoutes); 

app.use(notFound);
app.use(errorHandler);

module.exports = app;