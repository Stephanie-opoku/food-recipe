const express = require('express')
const app = express.Router()
const {home,contact,about,apiData, ingredients} = require('../controllers/foodControllers')


app.get('/',home )
app.get('/home',home )
app.get('/contact',contact)
app.get("/about" , about)
app.get("/api" , apiData)
app.get("/ingredients" , ingredients)


module.exports = app 