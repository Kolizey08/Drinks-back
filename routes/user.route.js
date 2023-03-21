const { Router } = require('express')
const { userController } = require('../controllers/users.controller')


const router = Router()

router.post('/registration', userController.addUser)
router.post('/authorization', userController.authorizationUser)
router.patch('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUserId)

module.exports = router