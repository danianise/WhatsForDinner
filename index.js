require('dotenv').config()
const express = require('express')
const app = express()
const recipeControllers = require('./controllers/recipes')
const Recipe = require('./models/recipe-model')
const mongoose = require('./db/connection')
const ejs = require('ejs')
const methodOverride = require('method-override')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/recipes', recipeControllers)

app.set('view engine', 'ejs')

const port = process.env.PORT || 4000
// app.set("port", process.env.PORT || 4000)

app.listen(port, () => {
    console.log(`Recipe App is running on port ${port}`)
})

