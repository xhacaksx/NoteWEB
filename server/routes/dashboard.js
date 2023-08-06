const express=require('express');
const router=express.Router();
const dashboardController = require('../controller/dashboardController');


// App routes

router.get('/dashboard',dashboardController.dashboard);
//router.get('/about',mainController.about);

module.exports = router;