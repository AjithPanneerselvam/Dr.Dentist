var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../database/user');


router.get('/add',function(req,res,next){
  res.render('add', {title: 'add users'});
});


// router.post('/add',function(req,res){
//     var firstName = req.body.first_name;
//     var lastName = req.body.last_name;
//     var email = req.body.email;
//     var contact = req.body.contact;
//     var caseName = req.body.case_name;
//     var description = req.body.description;
//
//     var user = User();
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.contact = contact;
//     user.caseName = caseName;
//     user.description = description;
//
//     user.save(function(err,updatedDB){
//         if (err){
//             console.log(err);
//             return;
//         }
//         res.send(updatedDB);
//     });
// });

module.exports = router;
