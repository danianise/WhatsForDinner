const mongoose = require('mongoose')

const mongoURI = 
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb+srv://danianise:danianise@cluster0.vg6ym.mongodb.net/recipes?retryWrites=true&w=majority'
    
mongoose.connect(mongoURI)
    .then(instance => console.log(`Connected to: ${instance.connections[0].name}`)
    )
    .catch(error => console.log(`failed conn:`, error)
    )

module.exports = mongoose