const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model('crud',todoSchema)

module.exports = Todo;