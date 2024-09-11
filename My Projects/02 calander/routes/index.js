const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller') 

routes.get('/', controller.home)
routes.get('/Month', controller.month)

module.exports = routes