const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

router.get('/:id', commentController.comment)

module.exports = router