const express = require('express')
const fs = require('fs')
const path = require('path')
const helmet = require('helmet')
const steph = require('./routes/basicroutes')



const app = express()
   // requiring the package 
const dotEnv = require('dotenv')
dotEnv.config()

const port = process.env.PORT || 4500

// getting the url of the front end page
app.use(express.static('public'))


app.use('/',steph)


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    })

  