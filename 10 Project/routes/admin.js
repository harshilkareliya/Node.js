const express = require('express');
const routes = express.Router()
const controller = require('../controller/adminCtl')
const auth = require('../middlewares/authantication')

routes.get('/',auth, controller.Home)
routes.get('/profile',auth,controller.profile)

routes.post('/add', controller.addAdmin)
routes.post('/login', controller.login)
routes.post('/changePassword', auth,controller.changePassword)
routes.post('/forgotPassword',auth,controller.forgotPassword)
routes.post('/otpVerification',auth,controller.otpVerification)
routes.post('/addManager', auth,controller.addManager)

routes.delete('/delete', auth,controller.deleteAdmin)

module.exports = routes