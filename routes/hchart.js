var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    console.log('test');
    res.render('hchart/index', {index:"a"});
});

// 跳转到不同的图表
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.render('hchart/' + req.params.id);
});

module.exports = router;
