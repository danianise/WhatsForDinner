const mongoose = require('../db/connection')

const RecipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        ingredients: {
            type: Array,
            required: true
        },
        imageURL: {
            type: String
        },
        directionsURL: {
            type: String,
            required: true
        },
        allergensContained: {
            type: Array,
            required: true
        },
        seeAlso: [
            {   
            title: String,
            url: String
            }
        ]
    },
    { timestamps: true }
);

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe