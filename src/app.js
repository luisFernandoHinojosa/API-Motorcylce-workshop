const express = require('express') 
const users = require('./motorcycle-workshop/routes/route.users')
const repairs = require('./motorcycle-workshop/routes/route.repairs')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/motorcycle-workshop', users,repairs)


module.exports = app