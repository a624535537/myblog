var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost:27017/myblog'); 
var Schema=mongoose.Schema; //创建模型
var userSchema=new Schema({
	docs:String,
	username:String,
	password:Number,
});

userSchema.methods.adduser=function(user,callback){
	this.docs=user.docs;
	this.username=user.username;
	this.password=user.password;
	
}


var user=db.model('users',userSchema);
module.exports=user;