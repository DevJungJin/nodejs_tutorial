var async = require('async');
var unirest = require('unirest');

var start = new Date().getTime();
async.parallel([
                function(callback){
                	unirest.get('https://api.github.com/users/bwcho75')
                	.header('Accept', 'application/json')
                	.header('User-Agent','mynodeapplication')
                	.end(function(response){
                		callback(null,response.body);
                	})
                	
                },
                function(callback){
                	unirest.get('https://api.github.com/users/bwcho75/followers')
                	.header('Accept', 'application/json')
                	.header('User-Agent','mynodeapplication')
                	.end(function(response){
                		callback(null,response.body);
                	})               	
                }
                ],
                function(err,results){
					console.log('Result 1 -------');
					console.log(results[0]);
					console.log('Result 2 -------');
					console.log(results[1]);
					console.log('elapsed time : '+(new Date().getTime() - start));
	
});

