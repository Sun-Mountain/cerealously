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

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`server is running on PORT ${app.get('port')}`));