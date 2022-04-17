const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

//index route, shows all the recipes with images
router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => res.render('index', {recipes: recipes}))
        .catch(console.error)
})

//add recipe route, shows the form to add a recipe
router.get('/add', (req, res) => {
    res.render('add')
})

//POST route for adding a recipe when you submit the form
router.post('/add', (req, res) => {
    console.log(req.body)
    Recipe.create(req.body)
    .then(() => res.redirect('/recipes'));
})

router.get('/:id/edit', (req, res) => {
    Recipe.findOne({_id: req.params.id})
        .then((recipes) => res.render('edit', {recipes: recipes}))
})

router.put('/:id/edit', (req, res) => {
    const id = req.params.id
    console.log(req.body)
    Recipe.findOneAndUpdate({_id: id}, req.body)
    .then(() => res.redirect('/recipes/id'))
})

//route to show each recipe individually
router.get('/:id', (req, res) => {
    Recipe.findOne({_id: req.params.id})
    .then((recipes) => res.render('each', {recipes: recipes}))
})

//route to delete a recipe
router.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id })
    .then(() => res.redirect('/recipes') );
});

module.exports = router;