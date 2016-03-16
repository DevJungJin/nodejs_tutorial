var Promise = require('promise');

var fs = require('fs');
var src = '/tmp/myfile.txt';
var des = '/tmp2/myfile_promise2.txt';

var fread = Promise.denodeify(fs.readFile);
var fwrite = Promise.denodeify(fs.writeFile);

fread(src)
.then(
		function(text){
			console.log('Read done');
			return fwrite(des,text); // 체이닝을 하려면 return을 해줘야 함. 
		})
		.then(function(){
			console.log('Write done');
		})
		.catch(function(reason){
			console.log('Read or Write file error');
			console.log(reason);
		});



