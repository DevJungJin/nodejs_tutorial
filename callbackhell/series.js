var async = require('async');

async.series([
              function(callback){
            	  console.log('task1');
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
				else console.log(results)
                             // handle resultC
			 }
);
console.log('async series');