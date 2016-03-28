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

// populate model
p.name = "terry";

// address
var a = new Address();
a.zipcode = 135090;
a.city = "youngin";
a.state = "Kyungki";
p.address = a;

// birthday
p.birthday = new Date(1970,05,10);

// meta
p.meta = { company : 'cloud consulting', book : 'architecture design'};

// image
p.image.contentsType='image/png';
var buffer = fs.readFileSync('/Users/terry/nick.jpeg');
p.image.data = buffer;

// recommend
p.recommend.push("I want to recommend terry");
p.recommend.push("He is good guy");

p.save(function(err,silece){
	if(err){
		cosole.log(err);
		return;
	}
	
	console.log(p);

});


