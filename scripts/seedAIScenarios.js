const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Scenario = require('../src/models/scenario');
const AIMate = require('../src/models/aiMate');
const aiMatesData = require('./data/mates');
const scenariosData = require('./data/scenarios');
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_PW = process.env.MONGODB_PW;

const seedData = async () => {
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

    // Create AI Mates
    const createdAIMates = await AIMate.create(aiMatesData);

    // Create a map of AI Mate names to their _id
    const aiMateMap = createdAIMates.reduce((map, mate) => {
      map[mate.name] = mate._id;
      return map;
    }, {});

    // Update scenarios with the correct AI Mate _id and ensure unique ids
    const updatedScenarios = scenariosData.map((scenario, index) => {
      // Find the corresponding AI Mate by name
      const aiMate = createdAIMates.find(mate => mate.name === scenario.aiName);

      if (aiMate) {
        return {
          ...scenario,
          id: index + 1, // Assign a unique id based on the index
          aiMateId: aiMate._id
        };
      } else {
        console.warn(`No matching AI Mate found for scenario: ${scenario.title}`);
        return {
          ...scenario,
          id: index + 1 // Still assign a unique id even if no AI Mate is found
        };
      }
    });

    // Create scenarios
    await Scenario.insertMany(updatedScenarios);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
  }
};

seedData().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});