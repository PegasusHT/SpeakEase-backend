const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScenarioSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    context: { type: String, required: true },
    aiMateId: { type: Schema.Types.ObjectId, required: true },
    aiMateRole: { type: String, required: true },
    userRole: { type: String, required: true },
    objectives: [{ type: String }],
    usefulPhrases: [{
        phrase: { type: String, required: true },
        pronunciation: { type: String, required: true }
    }],
    image: { type: String, required: true },
});

const Scenario = mongoose.model('Scenario', ScenarioSchema);
module.exports = Scenario;