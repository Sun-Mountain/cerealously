const express = require('express')
const router = express.Router()

router.use('/', require('./application'))
router.use('/cereal', require('./cereal_post'))

router.all('*', (req, res) => {
    res.status(400).send()
})

module.exports = router