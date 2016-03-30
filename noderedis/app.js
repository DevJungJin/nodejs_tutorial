var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// redis example
var redis = require('redis');
var JSON = require('JSON');
client = redis.createClient(6379,'127.0.0.1');

app.use(function(req,res,next){
	req.cache = client;
	next();
})
app.post('/profile',function(req,res,next){
	req.accepts('application/json');
	
	var key = req.body.name;
	var value = JSON.stringify(req.body);
	
	req.cache.set(key,value,function(err,data){
		if(err){
			console.log(err);
			res.send("error "+err);
			return;
		}
		req.cache.expire(key,10);
		res.json(value);
		//console.log(value);
	});
})
app.get('/profile/:name',function(req,res,next){
	var key = req.params.name;
	
	req.cache.get(key,function(err,data){
		if(err){
			console.log(err);
			res.send("error "+err);
			return;
		}

		var value = JSON.parse(data);
		res.json(value);
	});
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
