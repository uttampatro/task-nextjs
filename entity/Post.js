const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
  }

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    created_at: {
        type: String,
        default: formatAMPM(new Date),
    },
});

module.exports = mongoose.model('post', postSchema);
