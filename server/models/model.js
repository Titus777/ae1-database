const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ID : {
        type : Number,
        required: true
    },
    Name : {
        type: String,
        required: true
    },
    Genre : {
        type: String,
        required: true
    },
    Type : {
        type: String,
        required: true
    },
    Episodes : {
        type: Number,
        required: true
    },
    Rating : {
        type: Number,
        required: true
    },
    Members : {
        type: Number,
        required: true
    }
})

const anime = mongoose.model('anime', schema);

module.exports = anime;