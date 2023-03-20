const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userShema)

module.exports = User