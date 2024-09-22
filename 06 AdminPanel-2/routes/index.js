const express = require('express');
const router = express.Router(); 
const controller = require('../controller/adminController');
const multer = require('multer');
const passport = require('passport');

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const uploadPic = multer({storage : Storage}).single('image')

router.get('/',controller.login)
router.post('/login', passport.authenticate("local", {failureRedirect : '/'}),controller.loginAdmin)
router.get('/dashboard',passport.checkAuth ,controller.dashboard);
router.get('/addAdmin',passport.checkAuth ,  controller.addAdmin);
router.post('/addAdminData',passport.checkAuth ,  uploadPic,controller.addAdminData);
router.get('/viewAdmin',passport.checkAuth , controller.viewAdmin);
router.get('/deleteAdmin',passport.checkAuth ,  controller.deleteAdmin);
router.get('/editAdmin',passport.checkAuth , controller.editAdmin);
router.post('/updateAdmin',passport.checkAuth, uploadPic, controller.updateAdmin);

router.get('/charts',  controller.charts);
router.get('/widgets',  controller.widgets);

module.exports = router;