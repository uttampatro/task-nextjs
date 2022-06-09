const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('post', postSchema);
