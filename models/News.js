const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const News = new Schema({
    author: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    picture: String,
    title: String
})

module.exports = mongoose.model("News", News)