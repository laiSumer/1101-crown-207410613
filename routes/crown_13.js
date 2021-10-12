var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_13', { title: 'Express',name:'賴俊達',id:'207410613' });
});

module.exports = router;
