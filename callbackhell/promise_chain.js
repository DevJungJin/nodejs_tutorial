var Promise = require('promise');

var asyncfunction1 = function(param){
	return new Promise(function(fullfilled,rejected){
		setTimeout(
			function(){
				fullfilled('result 1:'+param);
			},1000);
	});
}
var asyncfunction2 = function(param){
	return new Promise(function(fullfilled,rejected){
		setTimeout(
			function(){
				fullfilled('result 2:'+param);
			},1000);
	});
}
var asyncfunction3 = function(param){
	return new Promise(function(fullfilled,rejected){
		setTimeout(
			function(){
				fullfilled('result 3:'+param);
			},1000);
	});
}

var promise = asyncfunction1(' terry ');
promise
.then(asyncfunction2)
.then(asyncfunction3)
.then(console.log);


