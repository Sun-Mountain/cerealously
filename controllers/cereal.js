const Cereal = require('../models/Cereal')

module.exports = {
    create: (req, res) => {
        Cereal.create({
            name: req.body.cereal.name,
            brand: req.body.cereal.brand,
            picture: req.body.cereal.picture,
            milkType: req.body.cereal.milkType,
            review: req.body.cereal.review
        })
        .then(cereal => {
            res.redirect(`cereal/${cereal._id}`)
        })
    },
    new: (req, res) => {
        res.render('cereal/new')
    },
    show: (req, res) => {
        Cereal.findOne({ _id: req.params.id })
        .then(cereal => {
            console.log(cereal)
            res.render("cereal/show", { cereal })
        })
    },
    delete: (req, res) => {
        Cereal.findOneAndRemove({ _id: req.params.id })
        .then( () => {
            res.redirect('/')
        })
    }
}