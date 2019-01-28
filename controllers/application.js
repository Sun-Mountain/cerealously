const Cereal = require('../models/Cereal')

module.exports = {
    index: (req, res) => {
        Cereal.find({})
        .sort({ createdAt: -1 })
        .limit(7)
        .then(cereals => {
            res.render("app/index", { cereals })
        })
    }
}