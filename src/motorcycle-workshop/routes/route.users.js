const express = require('express')
const routerUser = express.Router()

const userController = require('../controllers/controller.users')

routerUser.get('/motorcycle-workshop', userController.findAll)

routerUser.get('/motorcycle-workshop/:id', userController.findOne)

routerUser.post('/motorcycle-workshop', userController.create)

routerUser.patch('/motorcycle-workshop/:id', userController.update)

routerUser.delete('/motorcycle-workshop/:id', userController.suppress)

module.exports = routerUser