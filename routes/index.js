var express = require('express')
var router = express.Router();
var count = require('./count.js');
var fs = require("fs");
var mongoose=require('mongoose');
var comment = require('./mongodb.js');
var path = "././public/main"
var read = count.rd(path);
console.log(read);
/* GET home page. */function routes(app){
	app.post('/showMenu',function(req,res){
		var a =/\.\w*/;
	if(req.body.content=="")
	res.jsonp({title:read});
	else{
	var title = count.rd(path+"/"+req.body.content);
	var pathNow = path+"/"+req.body.content+"/"+title;
	for(var i = 0;i<title.length;i++)
	{
		if(a.test(title[i]))
		title[i]=title[i].replace(a,"");
		console.log(title[i]);
		}
	res.jsonp({title:title,path:pathNow});
	}
	});
//	app.post('/readcomment',function(req,res){
//comment.find({title:req.body.title},function(err,result){
//       if(err){
//      res.jsonp(err);
//       }else{
//         res.jsonp(result);
//       }
//   });
//		});
//app.get('/', function(req, res) { 
//res.render('index');
//comment.find({title:'about'},function(err,result){
//       if(err){
//     console.log(err);
//       }else{
//          console.log(result);
//       }
//   });
//});
//app.get('/title-nu',function(req,res){	
//	res.jsonp({title:read});
//	});
//	app.post('/read-img',function(req,res){	
//	read = count.rd(req.body.imghref);
//	console.log(read);
//	res.jsonp({imghref:read});
//	});
//	app.post('/comment',function(req,res){	
//	var com = new comment();
//	com.addcomment({nickname:req.body.nickname,comment:req.body.comment,title:req.body.title},
//	function(){
//		console.log("add success");
//		res.jsonp({success:true});
//		}
//	);
//
//	});
//	app.post('/read-docs',function(req,res){	
//	fs.readFile(req.body.imghref,"utf8",function(err,data){
//		if(err)
//		{
//			console.log(err);
//			}
//			else{
//				console.log(data);
//				res.jsonp({imghref:data});
//				}
//		});
//	
//	
//	});
//	app.post('/read-title',function(req,res){	
//	var titlename = [];
//	var pathlist = path+'/'+req.body.title;
//	var titleList = count.rd(pathlist);
//	for(var i = 0;i<titleList.length;i++)
//	{
//		var a =/\.\w*/;
//		titlename[i] = titleList[i].replace(a,'');
//	    titleList[i] = pathlist+'/'+titleList[i]
//	}
//	console.log(titleList);
//	res.jsonp({titlename:titlename,titlepath:titleList});
//	});
//app.get('/lt',function(req,res){
//	res.render('lt');
//	});
	app.get('/test',function(req,res){
	res.render('test');
	});
	
	
}


module.exports = routes;
