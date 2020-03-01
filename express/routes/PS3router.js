var express = require('express');
var router = express.Router();

//part b
router.get('/mssg', function(req, res, next) {
    res.render('index',{title: "Trust the Process"});
});
//part c
router.post('/mssg', function(req, res, next){
    res.render('index', {title: req.body["title"],len: req.body["title"].length });
});

module.exports = router;