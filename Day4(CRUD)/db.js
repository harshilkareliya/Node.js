const mongoose = require('mongoose')
const mongoDb = "mongodb://localhost:27017/ToDo"

mongoose.connect(mongoDb)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDb server')
})

db.on('disconnected',()=>{
    console.log('Disonnected to MongoDb server')
})

db.on('error',(err)=>{
    console.log('Error to MongoDb server ' + err)
})

module.exports = db;