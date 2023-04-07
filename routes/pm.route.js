const express = require('express');
const pMController = require('../controllers/device.controller')

const router = express.Router()

router.get('/getPM/:id/:pM' , deviceController.deviceFinder)


module.exports = router
