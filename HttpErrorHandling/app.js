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
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/error',function(req,res,next){
	var error = new Error("My Error");
	error.type='my error';
	next(error);
});

app.use(function(err,req,res,next){
	console.log(err.type);
	console.log(err.stack);
	
	res.format({
	       html: function(){
	           res.status(500);
	           res.send('HTTP 500 error');
	        
	        },
	       json:function(){
	           res.send(500,{code:err.type,description:'error detail'});
	       }
	  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers



module.exports = app;
