const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller') 

routes.get('/', controller.home)
routes.get('/Month', controller.month)
routes.post('/addAppoitment', controller.addAppoitment)

module.exports = routes