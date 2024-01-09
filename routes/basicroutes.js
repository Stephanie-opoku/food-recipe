const express = require('express')
const app = express.Router()
<<<<<<< HEAD
const {home,contact,about,apiData} = require('../controllers/foodControllers')
=======
const {home,contact,about,test} = require('../controllers/foodControllers')
>>>>>>> a4f21d1d7b25acc56ed60bd85cca5f28ed15a462


app.get('/',home )
app.get('/contact',contact)
app.get("/about" , about)
<<<<<<< HEAD
app.get("/api" , apiData)
=======
app.get('/test',test)
>>>>>>> a4f21d1d7b25acc56ed60bd85cca5f28ed15a462

module.exports = app 