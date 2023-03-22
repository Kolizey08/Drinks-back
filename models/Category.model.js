const mongoose = require('mongoose')

const categoryShema = mongoose.Schema({
    name: String,
})

const Category = mongoose.model('Category', categoryShema)

module.exports = Category