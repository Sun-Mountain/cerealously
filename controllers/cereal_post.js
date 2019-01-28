const cerealPost = require('../models/cereal_post')

module.exports = {
    show: (req,res) => {
        cerealPost.findOne({ _id: req.params.id })
        .then(cereal => {
            console.log(cereal)
            res.render("cereal_post/show", { cereal })
        })
    }
}