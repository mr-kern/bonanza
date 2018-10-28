var express = require('express');
var router = express.Router();

/* GET applicants listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource applicants too');
});

module.exports = router;
