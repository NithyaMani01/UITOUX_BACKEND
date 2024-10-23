const express = require('express');
const homeControllers = require('../controllers/homeController.js');
const router = express.Router();

router.get('/homeData', homeControllers?.getHomeData);

module.exports = router