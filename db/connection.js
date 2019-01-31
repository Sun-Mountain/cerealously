const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cereal')
mongoose.Promise = Promise

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.cerealously)
  } else {
    mongoose.connect("mongodb://localhost/cerealously");
  }

module.exports = mongoose