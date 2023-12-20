const express = require('express')
const app = express.Router()
const {home,contact,about} = require('../controllers/foodControllers')


app.get('/',home )
app.get('/contact',contact)
app.get("/about" , about)

module.exports = app 