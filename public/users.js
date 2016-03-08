var mongoose= require('mongoose');
var Schema=mongoose.Schema;
var UserSchema = new Schema({
  name:  String,
  email: String,
  contact:   String
  
});

module.exports=mongoose.model('User',UserSchema);
