const express = require('express')
const routes = express.Router()

const adminCtr = require('../controller/adminCtr')

routes.get('/', adminCtr.home)
routes.get('/about', adminCtr.about)
routes.get('/book', adminCtr.book)
routes.get('/contact', adminCtr.contact)

module.exports = routes