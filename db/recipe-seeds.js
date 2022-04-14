const Recipe = require('../models/recipe-model')
const seedData = require('./recipe-seeds.json')

Recipe.deleteMany({},)
    .then(() => {
        return Recipe.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })