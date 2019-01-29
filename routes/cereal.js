const express = require('express')
const router = express.Router()
const cerealController = require('../controllers/cereal')

router.get('/new', cerealController.new)
router.get('/:id', cerealController.show)

module.exports = router