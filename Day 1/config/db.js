const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/F_TODO');

const db = mongoose.connection

db.once('open', (err) =>{
    err ? console.error(err) : console.log('MongoDB connection Success');
})

module.exports = db;