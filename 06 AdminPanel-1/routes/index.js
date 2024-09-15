const express = require('express');
const router = express.Router(); 
const controller = require('../controller/adminController');
const authanticate = require('../middleware/authantication')
const multer = require('multer');

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
router.post('/login', controller.loginAdmin)
router.get('/dashboard', authanticate,controller.dashboard);
router.get('/addAdmin', authanticate,controller.addAdmin);
router.post('/addAdminData', authanticate,uploadPic,controller.addAdminData);
router.get('/deleteAdmin', authanticate,controller.deleteAdmin);
router.get('/editAdmin', authanticate,controller.editAdmin);
router.post('/updateAdmin',authanticate,uploadPic, controller.updateAdmin);
router.get('/clearCookies', controller.clearCookies);

router.get('/viewAdmin',authanticate, controller.viewAdmin);
router.get('/charts',authanticate, controller.charts);
router.get('/widgets',authanticate, controller.widgets);

module.exports = router;