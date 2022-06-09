const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const date = new Date();
let minute = date.getMinutes();
let hour = date.getHours();
let ampm = hour >= 12 ? 'pm' : 'am';
hour = hour % 12;
hour = hour ? hour : 12
const currTime = `${hour}:${minute} ${ampm}`;

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        default: currTime,
    },
});

module.exports = mongoose.model('post', postSchema);
