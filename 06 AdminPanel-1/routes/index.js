const express = require('express');
const router = express.Router(); 
const controller = require('../controller/adminController');

router.get('/', controller.dashboard);
router.get('/addAdmin', controller.addAdmin);
router.post('/addAdminData', controller.addAdminData);
router.get('/viewAdmin', controller.viewAdmin);
router.get('/charts', controller.charts);
router.get('/widgets', controller.widgets);

module.exports = router;