const express = require('express');
const deviceController = require('../controllers/device.controller')

const router = express.Router()

router.get('/getDevice/:id' , deviceController.deviceFinder)


module.exports = router
