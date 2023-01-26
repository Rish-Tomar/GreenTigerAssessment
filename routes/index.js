const express = require('express')
const studentController = require('../controller/studentController')
const router = express.Router()

router.get('/',studentController.studentShowData)
router.post('/create-student',studentController.studentCreate)

module.exports= router