var express = require('express');
var router = express.Router();

const apiCrown2Controller_13 = require('../controllers/apiCrown2Controller_13');

/* GET home page. */
router.get('/category_13', apiCrown2Controller_13.getCatagories);

module.exports = router;
