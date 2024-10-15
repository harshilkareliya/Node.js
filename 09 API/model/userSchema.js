const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
    },
    mobile : {
        type : Number,
    },
    gender : {
        type : String,
    },
    hobby : {
        type : Array,
        default : [],
    },
    image : {
        type : String,
    },
    createdAt : {
        type : String
    }
})

const userSchema = mongoose.model("Project1", schema)
module.exports = userSchema;