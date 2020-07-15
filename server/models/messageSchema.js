let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let messageSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', messageSchema); 