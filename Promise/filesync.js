
var fs = require('fs');
var src = '/tmp/myfile.txt';
var des = '/tmp/myfile_sync.txt';

var data = fs.readFileSync(src);
console.log("Read file is done");

fs.writeFileSync(des,data);
console.log("Write file is done");
