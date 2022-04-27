const { response } = require('express')
const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

let allIngredients = []

//INDEX route, shows all the recipes with images
router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => res.render('index', {recipes: recipes}))
        // .then(console.log(recipes.ingredients))
        .catch(console.error)
})

//add recipe GET route, shows the FORM TO ADD a recipe
router.get('/add', (req, res) => {
    res.render('add')
})

//POST route for ADDing a recipe when you submit the form
router.post('/add', (req, res) => {
    console.log(req.body.ingredients)
    let ingredients = req.body.ingredients
    let ingredientsArray = ingredients.split(", ")
    console.log(ingredientsArray)

    Recipe.create({
        title: req.body.title,
        ingredients: ingredientsArray,
        imageURL: req.body.imageURL,
        directionsURL: req.body.directionsURL,
        allergensContained: req.body.allergensContained
    })
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
    let input = req.body.ingredients
    let ingredientsLowerCase = input.toLowerCase()
    let formattedIngredients = ingredientsLowerCase.split(", ")
    // console.log(formattedIngredients)
    Recipe.find({ingredients: { $all: formattedIngredients } })
        .then(searchResults => {
            // console.log(searchResults)
            res.render('ingredientSearchResults', {searchResults: searchResults})
        })
        .catch(console.error)
})

//route for ALLERGEN FILTER
router.get('/allergenFilter', (req, res) => {
    res.render('allergenFilter')
})

//route for ALLERGEN FILTER RESULTS page
router.get('/allergenFilterResults', (req, res) => {
    res.render('allergenFilterResults')
})

//POST route for submitting ALLERGEN FILTER form
router.post('/allergenFilterResults', (req, res) => {
  console.log(req.body.allergensContained)
  let allergens = req.body.allergensContained
//   Recipe.find({allergensContained: {$not: {$in: [allergens]} } })
    Recipe.find({allergensContained: {$nin: [allergens]} })
    .then(searchResults => {
        res.render('allergenFilterResults', {searchResults: searchResults})
    })
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