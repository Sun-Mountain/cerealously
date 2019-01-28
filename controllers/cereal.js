const Cereal = require('../models/Cereal')

module.exports = {
    show: (req, res) => {
        Cereal.findOne({ _id: req.params.id })
        .then(cereal => {
            console.log(cereal)
            res.render("cereal/show", { cereal })
        })
    }
}