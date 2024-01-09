const express = require('express')
const app = express.Router()
const {home,contact,about,apiData} = require('../controllers/foodControllers')


app.get('/',home )
app.get('/contact',contact)
app.get("/about" , about)
app.get("/api" , apiData)

module.exports = app 