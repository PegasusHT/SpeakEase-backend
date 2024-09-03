const mongoose = require('mongoose');
const { Schema } = mongoose;

const MateSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    field: {
        type: String,
        required: [true, "Field is required"]
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