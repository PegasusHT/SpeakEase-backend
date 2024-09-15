const mongoose = require('mongoose');
const { Schema } = mongoose;

const AIMateSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    traits: {
        type: String,
        default: null,
    },
    role: {
        type: String,
        default: null,
    },
    image: { type: String, required: true },
    backgroundImage: { type: String, required: true }
}, { collection: 'mate' }); 

module.exports = mongoose.model('AIMate', AIMateSchema);