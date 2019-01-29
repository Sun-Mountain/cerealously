const Cereal = require('../models/Cereal')

module.exports = {
    new: (req, res) => {
        res.render('cereal/new')
    },
    show: (req, res) => {
        Cereal.findOne({ _id: req.params.id })
        .then(cereal => {
            console.log(cereal)
            res.render("cereal/show", { cereal })
        })
    }
}