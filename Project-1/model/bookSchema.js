const mongoose = require('mongoose')

const book = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    pub_year : {
        type : Number,
        required : true
    },
    pages : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    pub_copies : {
        type : Number,
        required : true
    }
})

const bookSchema = mongoose.model('Book_Detail',book)

module.exports = bookSchema;