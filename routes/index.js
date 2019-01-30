const express = require('express')
const router = express.Router()

router.use('/', require('./application'))
router.use('/cereal', require('./cereal'))
router.use('/comment', require('./comment'))

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router