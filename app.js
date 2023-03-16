const express = require('express')
const app = express()
app.listen(3500,()=>{
    console.log("server conneceted");
})

// -------------------------


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/login').then(()=>{
    console.log("mongodb conneceted");
})

const login = require('./model/model1')


// -----------View Ejs in Browser------------

const path = require('path');
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => {
    res.render(path.join(__dirname,"views/login.ejs"));
  });


  const route1 = require('./router/route')
  

