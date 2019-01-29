const express = require('express')
const router = express.Router()
const cerealController = require('../controllers/cereal')

router.post('/', cerealController.create)
router.delete('/:id', cerealController.delete)
router.get('/:id/edit', cerealController.edit)
router.get('/new', cerealController.new)
router.get('/:id', cerealController.show)
router.patch('/:id', cerealController.update)

module.exports = router