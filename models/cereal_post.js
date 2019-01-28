const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const cereal_post = new Schema({
    title: String,
    brand: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    milkType: String,
    review: String, 
    url: String
})

module.exports = mongoose.model("cereal_post", cereal_post)