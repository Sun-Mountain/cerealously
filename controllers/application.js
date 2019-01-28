const cerealPost = require('../models/cereal_post')

module.exports = {
    index: (req, res) => {
        cerealPost.find({})
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("user")
        .then(cereal_posts => {
            res.render("app/index", {cereal_posts})
        })
    }
}