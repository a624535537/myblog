var server = http.createServer(app);
var io = require('socket.io').listen(server);
var urls = [];
var url = "http://tieba.baidu.com/f?kw=%B3%E8%CE%C4&fr=ala0&loc=rec";
var urls = [];
var html='';
 io.sockets.on('connection', function (socket) {
socket.on('online', function () {
	http.get(url,function(res){ 
     var htmlChild = '';
	res.on('data',function(data){
		html += data;
		});
		res.on('end',function(){
			urls = filtertitle(html);
	         console.log(urls);
			 io.sockets.emit('sd',urls);
			});
			});
socket.broadcast.emit('someonoline');
console.log("somenoneonline");
  });
  socket.on('disconnect', function() {
    socket.broadcast.emit('someoneoffline');
  });
    });
server.listen(80, function(){
  console.log('Express server listening on port ' +'80');
});
function filtertitle(html){
		
		
		var $ = cheerio.load(html);
		var titleDiv = $("li.j_thread_list");
		
		var reg = /\u3010\u63a8\u4e66/;
		titleDiv.each(function(index) {
            var titleParent = $(this);			
			var title = titleParent.find("div.threadlist_title").children("a").attr("title").toString();
			var href = titleParent.find("div.threadlist_title").children("a").attr("href");
			if(reg.test(title)){
			urls.push("http://tieba.baidu.com"+href);
			
			}
        });
		return urls;
		}