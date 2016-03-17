var async = require('async');

var fs = require('fs');
var src = '/tmp/myfile.txt';
var des = '/tmp/myfile_async.txt';

async.waterfall([
              function(callback){
            	  fs.readFile(src,callback);
              },
              function(data,callback){
            	  fs.writeFile(des,data,callback);
              }
             ],
             function(err,result){
				if(err) console.log(err);
				else console.log('file copy done');
			 }
);

