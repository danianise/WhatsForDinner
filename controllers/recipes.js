const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => res.render('index', {recipes: recipes}))
        .catch(console.error)
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('recipes/add', (req, res) => {
    console.log(req.body)
    Recipe.create(req.body)
    .then(() => res.redirect('/'));
})


module.exports = router;