var Promise = require('promise');

var asyncfunction = function(param){
	return new Promise(function(fullfilled,rejected){
		setTimeout(
			function(){
				fullfilled('hello'+param);
			},2000);
	});
	    
}

var promise = asyncfunction(' terry ');
promise.then(console.log,console.err); // 여기가 비동기 결과에 대한 콜백함


