const mongoose = require('mongoose')

const schema = mongoose.Schema({
    productName : {
        type: String,
        // required: true
    },
    price : {
        type: Number,
        // required: true
    },
    star : {
        type : Number,
        // required: true
    },
    rate : {
        type: Number,
        // required: true
    },
    discount : {
        type : Number,
        // required: true
    },
    productImage : {
        type: String,
        // required: true
    }
})

const productsSchema = mongoose.model('SEO Products', schema)

module.exports = productsSchema