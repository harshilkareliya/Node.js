const express = require('express');
const routes = express.Router()
const controller = require('../controller/user')

routes.get('/', (req,res)=>{
    res.status(200).json({message : "You are in Home Page"})
});

routes.use('/user', require('./user'))

module.exports = routes