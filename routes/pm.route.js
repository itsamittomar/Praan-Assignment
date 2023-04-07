const express = require('express');
const pMController = require('../controllers/pM.controller')

const router = express.Router()

router.get('/getPM/:id/:pM' , pMController.pMFinder)


module.exports = router
