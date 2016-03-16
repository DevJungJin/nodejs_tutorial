var Promise = require('promise');

var fs = require('fs');
var src = '/tmp/myfile.txt';
var des = '/tmp/myfile_promise.txt';

var fread = Promise.denodeify(fs.readFile);
var fwrite = Promise.denodeify(fs.writeFile);

fread(src).then(
		function(text){
			console.log('Read done');
			fwrite(des,text)
				.then(console.log('Write done'))
				.catch(console.log('write error'));
		}).catch(console.log('Read file error'));



