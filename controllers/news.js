const News = require('../models/News')

module.exports = {
    create: (req, res) => {
        News.create({
            author: req.body.news.author,
            content: req.body.news.content,
            picture: req.body.news.picture,
            title: req.body.news.title
        })
        .then(() => {
            res.redirect('/')
        })
    },
    new: (req, res) => {
        res.render('news/new')
    },
    show: (req, res) => {
        News.findOne({ _id: req.params.id })
        .then(news_post => {
            res.render("news/show", { news_post })
        })
    }
}