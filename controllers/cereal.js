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
    edit: (req, res) => {
        Cereal.findOne({_id: req.params.id})
        .then(cereal => {
        res.render('cereal/edit', { cereal })}
    )},
    delete: (req, res) => {
        Cereal.findOneAndRemove({ _id: req.params.id })
        .then( () => {
            res.redirect('/')
        })
    },
    new: (req, res) => {
        res.render('cereal/new')
    },
    show: (req, res) => {
        Cereal.findOne({ _id: req.params.id })
        .then(cereal => {
            res.render("cereal/show", { cereal })
        })
    },
    update: (req, res) => {
        Cereal.findOneAndUpdate(
            { _id: req.params.id}, 
//if doesn't work try cereal.$.tag
            {$set:{
                name: req.body.cereal.name,
                brand: req.body.cereal.brand,
                milkType: req.body.cereal.milkType,
                review: req.body.cereal.review
            }}
            )
        .then(cereal => {res.redirect('/')})
    },
}