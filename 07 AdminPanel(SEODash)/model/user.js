const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {
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
    }
})

const userSchema = mongoose.model('SEO Users', schema)

module.exports = userSchema