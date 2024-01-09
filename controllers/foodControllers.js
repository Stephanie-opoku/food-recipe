const path = require('path');

// Assuming you are in the 'account' directory

const home =(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/index.html');
    res.sendFile(filePath)
}

const contact =(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/contact.html');
    res.sendFile(filePath)
}
const about =(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/about.html');
    res.sendFile(filePath)
}
<<<<<<< HEAD
const apiData =(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/api.html');
=======
const test=(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/freepage.html');
>>>>>>> a4f21d1d7b25acc56ed60bd85cca5f28ed15a462
    res.sendFile(filePath)
}


module.exports = {
    home,
    contact,
    about,
<<<<<<< HEAD
    apiData
=======
    test
>>>>>>> a4f21d1d7b25acc56ed60bd85cca5f28ed15a462
}




