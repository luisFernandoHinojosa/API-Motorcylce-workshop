const express = require('express')
const routerUser = express.Router()

const userController = require('../controllers/controller.users')

routerUser.get('/users', userController.findAll)

routerUser.get('/users/:id', userController.findOne)

routerUser.post('/users', userController.create)

routerUser.patch('/users/:id', userController.update)

routerUser.delete('/users/:id', userController.suppress)

module.exports = routerUser