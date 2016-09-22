var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp: File Metadata Microservice' });
});

module.exports = router;
