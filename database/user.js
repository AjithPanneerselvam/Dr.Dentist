var mongoose = require('mongoose');;
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: false},
  email: {type:String, required:false},
  contact: { type: String, required: false},
  caseName: {type: String, required: true},
  description: { type: String, required: false}
})

module.exports = mongoose.model('User',User);
