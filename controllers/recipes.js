const express = require('express')
const router = express.Router()

const Recipe = require('../models/recipe-model')

router.get('/', (req, res) => {
    Recipe.find({})
        .then(recipes => res.json(recipes))
        .catch(console.error)
})



module.exports = router;