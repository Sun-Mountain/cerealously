const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Cereal = new Schema({
    name: String,
    brand: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    milkType: String,
    picture: String,
    review: String
})

module.exports = mongoose.model("Cereal", Cereal)