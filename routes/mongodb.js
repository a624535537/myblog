var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost:27017/comment'); //连接test数据库
 
var Schema=mongoose.Schema; //创建模型
var commentSchema=new Schema({
    nickname:String,
    comment:String,
    title:String,
   
});
 
commentSchema.methods.addcomment=function(comments,callback){
    this.nickname=comments.nickname;
    this.comment=comments.comment;
    this.title=comments.title;
    this.save(callback);
}
 
 
var comment=db.model('comments',commentSchema);
//exports.student=student;
module.exports=comment;