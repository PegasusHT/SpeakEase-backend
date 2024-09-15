const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScenarioSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    context: { type: String, required: true },
    aiRole: { type: Schema.Types.ObjectId, ref: 'AIMate', required: true },
    userRole: { type: String, required: true },
    objectives: [{ type: String }],
    usefulPhrases: [{
        phrase: { type: String, required: true },
        pronunciation: { type: String, required: true }
    }],
    image: { type: String, required: true },
    isNew: { type: Boolean, default: false }
});

const Scenario = mongoose.model('Scenario', ScenarioSchema);
module.exports = Scenario;