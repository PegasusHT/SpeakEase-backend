const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema({
        sessionId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000
        },
        sender: {
            type: String,
            enum: ['user', 'mate'],
            required: true
        }
    }, {
        timestamps:true
    }
);

const Message = model('Message', messageSchema);
module.exports = Message;