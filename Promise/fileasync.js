
var fs = require('fs');
var src = '/tmp/myfile.txt';
var des = '/tmp/myfile_async.txt';

fs.readFile(src,function(err,data){
	if(err){
		console.log("Read file error");
	}else{
		console.log("Read file is done");
		fs.writeFile(des,data,function(err){
			if(err){
				console.log("Write file error");
				return;
			}
			console.log("Write file is done");
		});
	}
});


