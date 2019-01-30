const express = require('express')
const router = express.Router()
const newsController = require('../controllers/news')

router.post('/', newsController.create)
router.get('/new', newsController.new)
router.get('news/:id', newsController.show)

module.exports = router