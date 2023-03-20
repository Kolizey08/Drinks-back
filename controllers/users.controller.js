const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

module.exports.userController = {
    addUser: async (req, res) => {
        try {
            const { username, password } = req.body
            
            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))

            const user = await User.create({username, password: hash})
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    authorizationUser: async (req, res) => {
        try {
            const { username, password } = req.body

            const condidate = await User.findOne({username})

            if(!condidate) {
                return res.status(401).json('Неправильное имя ползователя')
            }

            const valid = await bcrypt.compare(password, condidate.password)

            if(!valid) {
                return res.status(401).json('неправильный пароль')
            }

            const payload = {
                id: condidate._id,
                username: condidate.username
            }

            const token = await jwt.sign(payload, process.env.SECRET_JWT, {
                expiresIn: '24h'
            })

            res.json({token})
        } catch (error) {
            res.json(error.message)
        }
    },
    updateUser: async (req, res) => {
        try {
            const { username, password } = req.body

            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))

            const user = await User.findByIdAndUpdate(req.params.id, {
                username,
                password: hash
            })
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = await User.find()
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    getUserId: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    }
}