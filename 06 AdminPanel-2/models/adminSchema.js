const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fname : {
        type: String,
        // required: true
    },
    lname : {
        type: String,
        // required: true
    },
    email : {
        type: String,
        // required: true,
        unique: true
    },
    password : {
        type: String,
        // required: true
    },
    company : {
        type: String,
        // required: true
    },
    message : {
        type: String,
        // required: true
    },
    image : {
        type: String,
        // required: true
    }
})

const adminSchema = mongoose.model('AdminPersonSchema',schema)

module.exports = adminSchema