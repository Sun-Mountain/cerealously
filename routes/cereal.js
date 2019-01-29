const express = require('express')
const router = express.Router()
const cerealController = require('../controllers/cereal')

router.post('/', cerealController.create)
router.get('/new', cerealController.new)
router.get('/:id', cerealController.show)
router.delete('/:id', cerealController.delete)

module.exports = router