const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cereal')
mongoose.Promise = Promise
module.exports = mongoose