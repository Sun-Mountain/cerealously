const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(require("./routes/index.js"))

app.listen(1776, () => console.log("new york city"))