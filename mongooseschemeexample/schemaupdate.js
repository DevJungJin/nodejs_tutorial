var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost:27017/mydb');

// define scheme
var addressSchema = new mongoose.Schema({
	zipcode : Number,
	city : String,
	state : String
});


var profileSchema = new mongoose.Schema({
	name : String,
	address : addressSchema,
	birthday : Date,
	meta : mongoose.Schema.Types.Mixed,
	image : {
		data : Buffer,
		contentsType : String
	},
	recommend : [String]
});

// create model
var Profile = mongoose.model('profiles',profileSchema);
var Address = mongoose.model('address',addressSchema);
var p = new Profile();

Profile.findOne({_id:'56f93d08253b92b296080587'},function(err,p){
	console.log(p);
	p.birthday.setMonth(1);
	p.markModified('birthday');
	p.save(function(err,silece){
		if(err){
			cosole.log(err);
			return;
		}
		console.log(p);
	});
});


