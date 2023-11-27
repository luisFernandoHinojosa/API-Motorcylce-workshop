const express = require('express') 
const users = require('./motorcycle-workshop/routes/route.users')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', users)

module.exports = app