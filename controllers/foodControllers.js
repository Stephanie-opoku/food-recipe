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
const test=(req,res)=>{
    const filePath = path.join(__dirname, '..', 'views/freepage.html');
    res.sendFile(filePath)
}


module.exports = {
    home,
    contact,
    about,
    test
}




