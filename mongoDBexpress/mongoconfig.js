
var config = new Object();

config.ip = 'localhost';
config.port = 27017;
config.mongodb = 'mydb';
config.connectionString = String('mongodb://'+config.ip+':'+config.port+'/'+config.mongodb);
config.setdb = function(db){
	this.db = db;
	console.log('db set :'+config.db);
}

module.exports = config;