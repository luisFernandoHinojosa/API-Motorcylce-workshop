const express = require('express')
const routerRepairs = express.Router()

const repairController = require('../controllers/controller.repairs')

routerRepairs.get('/repairs', repairController.findAll)

routerRepairs.get('/repairs/:id', repairController.findOne)

routerRepairs.post('/repairs', repairController.create)

routerRepairs.patch('/repairs/:id', repairController.update)

routerRepairs.delete('/repairs/:id', repairController.suppress)

module.exports = routerRepairs;