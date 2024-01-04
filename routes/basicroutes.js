const express = require('express')
const app = express.Router()
const {home,contact,about,test} = require('../controllers/foodControllers')


app.get('/',home )
app.get('/contact',contact)
app.get("/about" , about)
app.get('/test',test)

module.exports = app 