const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

//INDEX route, shows all the recipes with images
router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => res.render('index', {recipes: recipes}))
        .catch(console.error)
})

//add recipe GET route, shows the FORM TO ADD a recipe
router.get('/add', (req, res) => {
    res.render('add')
})

//POST route for ADDing a recipe when you submit the form
router.post('/add', (req, res) => {
    // console.log(req.body)
    Recipe.create(req.body)
    .then(() => res.redirect('/recipes'));
})

//route for INGREDIENT SEARCH FORM
router.get('/ingredientSearchForm', (req, res) => {
    res.render('ingredientSearchForm')
})

//route for INGREDIENT SEARCH RESULTS page
router.get('/ingredientSearchResults', (req, res) => {
    res.render('ingredientSearchResults')
})

//POST route for submitting INGREDIENT SEARCH form
router.post('/ingredientSearchResults', (req, res) => {
    console.log(req.body)
    let formattedIngredients = req.body.ingredients.split(",")
    console.log(formattedIngredients)
    // Recipe.find({ingredients: { $all: [formattedIngredients[0], formattedIngredients[1] ] } })
    Recipe.find({ingredients: { $all: formattedIngredients } })
    // Recipe.find( { ingredients: req.body.ingredients } )
    // Recipe.find( { $and: [ { ingredients: formattedIngredients[0] }, { ingredients: formattedIngredients[1] } ] })
        .then(searchResults => {
            console.log(searchResults)
            res.render('ingredientSearchResults', {searchResults: searchResults}) })
        .catch(console.error)
})

//route for EDIT FORM
router.get('/:id/edit', (req, res) => {
    Recipe.findOne({_id: req.params.id})
        .then(recipes => res.render('edit', {recipes: recipes}))
})

//PUT route for EDITing a recipe
router.put('/:id', (req, res) => {
    const id = req.params.id
    let ingredients = req.body.ingredients
    // console.log(req.body)
    Recipe.findOneAndUpdate(
        {_id: id},
        {title: req.body.title,
        ingredients: ingredients.split(","),
        imageURL: req.body.imageURL,
        directionsURL: req.body.directionsURL,
        allergensContained: req.body.allergensContained,
        seeAlso: req.body.seeAlso
    },
        {new: true})
    .then(() => res.redirect(`/recipes/${req.params.id}`))
    .catch(console.error)
})

//route to show EACH recipe individually
router.get('/:id', (req, res) => {
    Recipe.findOne({_id: req.params.id})
    .then((recipes) => res.render('each', {recipes: recipes}))
})

//route to DELETE a recipe
router.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id })
    .then(() => res.redirect('/recipes') );
});

module.exports = router;