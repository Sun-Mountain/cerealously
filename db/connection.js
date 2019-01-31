const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.cerealously)
  } else {
    mongoose.connect("mongodb://localhost/cerealously");
  }

mongoose.Promise = Promise

module.exports = mongoose