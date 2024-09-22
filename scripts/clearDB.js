const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Scenario = require('../src/models/scenario');
const AIMate = require('../src/models/aiMate');
const MONGODB_URI = process.env.MONGODB_URI;

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