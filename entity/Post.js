const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const date = new Date()

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default:date.getTime()
    },
    
});

module.exports = mongoose.model('post', postSchema);