const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(require("./routes/index.js"))

app.listen(1776, () => console.log("new york city"))