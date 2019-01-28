const express = require('express')
const router = express.Router()
const cerealController = require('../controllers/cereal_post')

router.get('/:id', cerealController.show)

module.exports = router