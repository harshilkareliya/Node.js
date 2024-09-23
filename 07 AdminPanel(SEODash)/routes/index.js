const express = require('express')
const router = express.Router()
const controller = require('../controller/admin')
const passport = require('passport')


router.get('/', controller.dashboard)

router.get('/login',controller.login)
router.get('/register',controller.register)
router.get('/alerts',passport.checkAuthantication, controller.alerts)
router.get('/buttons',passport.checkAuthantication, controller.buttons)
router.get('/card',passport.checkAuthantication, controller.card)
router.get('/forms',passport.checkAuthantication, controller.forms)
router.get('/typography',passport.checkAuthantication, controller.typography)
router.get('/logout', passport.checkAuthantication, controller.logout)
router.get('/viewUsers',passport.checkAuthantication,  controller.viewUsers)
router.get('/deleteUser',passport.checkAuthantication,  controller.deleteUser)
router.get('/editUser',passport.checkAuthantication,  controller.editUser)

router.post('/register', controller.singup)
router.post('/login', passport.authenticate("local", {failureRedirect : '/login'}),controller.loginUser)
router.post('/updateUser',passport.checkAuthantication, controller.updateUser)

module.exports = router