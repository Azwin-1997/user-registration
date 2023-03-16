const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("user",scheme);