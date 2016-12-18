var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/search', function(req, res, next) {
  res.render('search', {title: 'Search users'});
  // res.send('respond with a resource');
});

module.exports = router;
