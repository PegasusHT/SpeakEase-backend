require('dotenv').config();
const mongoose = require('mongoose');
const Scenario = require('../src/models/scenario');
const AIMate = require('../src/models/aiMate');
const MONGODB_URI = 'mongodb+srv://jimmybuidev:fY84SIfeCGqxE15i@cluster0.75f3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const clearDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');

    // Clear existing data
    await Scenario.deleteMany({});
    await AIMate.deleteMany({});
    console.log('Database cleared successfully!');
  } catch (error) {
    console.error('Failed to clear the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

clearDatabase().catch(error => {
  console.error('Error clearing database:', error);
});