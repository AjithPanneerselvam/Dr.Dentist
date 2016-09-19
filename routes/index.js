var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dr.Dentist' });
});

// router.get('/search', function(req, res, next) {
//   res.render('search', { title: 'Search' });
//   next();
// });

// router.get('/add', function(req, res, next) {
//   res.render('add', { title: 'Add' });
// });


module.exports = router;
