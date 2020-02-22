var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express' });
});

router.get('/mssg', function(req, res, next) {
  res.render('index',{title: "Trust the Process"});
});

router.post('/mssg', function(req, res, next){
  res.render('index', {title: req.body["title"],len: req.body["title"].length });
});

module.exports = router;
