const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Cereal = new Schema({
    name: String,
    brand: String,
    picture: String,
    milkType: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    review: String
})

module.exports = mongoose.model("Cereal", Cereal)