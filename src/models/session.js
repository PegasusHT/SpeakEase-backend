const mongoose = require('mongoose');
const { Schema } = mongoose;

const SessionSchema = new Schema({
    name: { type: String, required: true },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    senseiId: {
        type: Schema.Types.ObjectId,
        ref: 'Sensei',
        required: true
    },
    assessment: { type: String, default: null },
    startedAt: { type: Date, default: Date.now },
    lastMessageAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;