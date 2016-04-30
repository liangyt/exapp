var express = require('express');
var router = express.Router();
var log = require('log4js').getLogger('index');

// var proinfoM = require('../models/proinfo_model');

/* GET home page. */
router.get('/', function(req, res, next) {

    // proinfoM.save({}, function(err, entity) {
    //     console.log(entity);
    // });

    res.render('index', { title: 'Express' });
});

module.exports = router;
