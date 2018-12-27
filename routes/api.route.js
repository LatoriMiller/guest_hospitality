var express = require('express')

var router = express.Router()
var guests = require('./api/guests.route')

//creates nested routes
//way to get api in front of a certain set of routes
router.use('/guests', guests);


module.exports = router;