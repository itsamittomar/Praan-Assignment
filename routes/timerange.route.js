const express = require('express');
const timeController = require('../controllers/TimeRange.controller')

const router = express.Router()

router.get('/getByTimeRange' , timeController.timeFinder)


module.exports = router
