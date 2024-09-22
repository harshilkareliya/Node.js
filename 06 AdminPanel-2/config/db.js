const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Classes1')

const db = mongoose.connection;

db.on('open',(err)=>{
    console.log(err ? err : 'Connected to MongoDB Database');
});

module.exports = db