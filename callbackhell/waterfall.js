var async = require('async');

async.waterfall([
              function(callback){
            	  callback(null,'hello');
              },
              function(resultA,callback){
            	  callback(null,resultA);
              },
              function(resultB,callback){
            	  callback(null,resultB);
              }
             ],
             function(err,resultC){
				if(err) console.log(err);
				console.log(resultC)
                             // handle resultC
			 }
);
