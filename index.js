require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const ejsLayout =  require("express-ejs-layouts");
const app = express()
const recipeControllers = require('./controllers/recipes')
const Recipe = require('./models/recipe-model')
const mongoose = require('./db/connection')
const ejs = require('ejs')
const bodyParser = require('body-parser')


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(ejsLayout)
app.use('/recipes', recipeControllers)

// const port = process.env.PORT || 4000
app.set("port", process.env.PORT || 4000)

// app.listen(port, () => {
//     console.log(`Recipe App is running on port ${port}`)
// })
app.listen(app.get("port"), () => {
    console.log(`Recipe App is running on port ${app.get("port")}`)
})

