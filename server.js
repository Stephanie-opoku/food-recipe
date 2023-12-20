const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const helmet = require('helmet')

   // requiring the package 
const dotEnv = require('dotenv')
dotEnv.config()

const port = process.env.PORT || 4500

// getting the url of the front end page
app.use(express.static('public'))


app.get('/', (req,res)=>{
   // res.header('Content-Type', 'text/css');
   res.sendFile(__dirname+'/index.html') 
   
})




app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    })

  