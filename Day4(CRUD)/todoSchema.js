const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    priority : {
        type : String,
        required : true
    } ,
    iscomplete : {
        type : Boolean,
        default : false
    }
})

const TODO = mongoose.model('TO DO',todoSchema)
module.exports = TODO