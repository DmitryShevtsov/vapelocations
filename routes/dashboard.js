var express = require('express');
var router = express.Router();
var VapeShop = require('../models').VapeShop;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/vapeshops');
});

module.exports = router;
