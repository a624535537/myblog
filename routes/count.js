var fs = require("fs");
var i=0;

var files = [];
function rd(path){ 
	files = fs.readdirSync(path);
	//for(var i = 0;i<files.length;i++)
	//files[i] = "/img/pictures/"+files[i];
	return files;
	
}
exports.rd = rd;



