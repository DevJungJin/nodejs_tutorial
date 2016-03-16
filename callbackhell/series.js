var async = require('async');

async.series([
              function(callback){
            	  callback(null,'resultA');
              },
              function(callback){
            	  callback(null,'resultB');
              },
              function(callback){
            	  callback(null,'resultC');
              }
             ],
             function(err,results){
				if(err) console.log(err);
				console.log(results)
                             // handle resultC
			 }
);
