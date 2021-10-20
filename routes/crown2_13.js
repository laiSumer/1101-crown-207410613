var express = require('express');
var router = express.Router();

const crown2Controller_13 = require('../controllers/crown2Controller_13');

/* GET home page. */
router.get('/', crown2Controller_13.getCatagories);

module.exports = router;
