const mongoose = require('mongoose');
const { Schema } = mongoose;

const MateSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    field: {
        type: String,
        default: null,
    },
    role: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, {
    timestamps: true,
});

const Mate = mongoose.model('Mate', MateSchema);

module.exports = Mate;