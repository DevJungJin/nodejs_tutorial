var express = require('express');
var router = express.Router();
var mongoconfig = require('../mongoconfig');

router.post('/insert', function(req, res, next) {
	var userid = req.body.userid;
	var sex = req.body.sex;
	var city = req.body.city;
	
	console.log('userid '+userid);
	db = mongoconfig.db;
	db.collection('users').insertOne({'_id':userid,'sex':sex,'city':city},function(err,doc){
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Inserted");
	       
	   });
});
router.post('/delete', function(req, res, next) {
	var userid = req.body.userid;
	
	db = mongoconfig.db;
	console.log('userid '+userid);
	db.collection('users').remove({'_id':userid},function(err,doc){
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Removed");
	       
	   });
});
router.post('/update', function(req, res, next) {
	var userid = req.body.userid;
	var sex = req.body.sex;
	var city = req.body.city;
	db = mongoconfig.db;
	db.collection('users').updateOne({_id:userid},{'sex':sex,'city':city},function(err,doc){
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Updated");
	       
	   });
});
router.get('/list', function(req, res, next) {
	db = mongoconfig.db;
	db.collection('users').find({}).toArray(function(err,doc){
		if(err) console.log('err');
		res.send(doc);
	});
});
router.get('/get', function(req, res, next) {
	db = mongoconfig.db;
	var userid = req.query.userid
	db.collection('users').findOne({'_id':userid},function(err,doc){
		if(err) console.log('err');
		res.send(doc);
	});
});

module.exports = router;
