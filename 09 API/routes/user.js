const express = require('express');
const routes = express.Router()
const controller = require('../controller/user')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
})

const uploadImage = multer({ storage: storage }).single('image');

routes.get('/', controller.viewUsers)

routes.post('/login', controller.login)

routes.post('/insertData',uploadImage, controller.insertUser);

routes.delete("/deleteData", controller.deleteUser);

routes.put('/updateData', controller.updateUser);

module.exports = routes