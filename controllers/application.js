const Cereal = require('../models/Cereal')
const News = require('../models/News')

module.exports = {
    index: (req, res) => {
        Cereal.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .then(cereals => {
                News.find({})
                .sort({ createdAt: -1 })
                .limit(1)
                .then(news => {
                    res.render("app/index", { cereals, news })
            })
        })
    }
}