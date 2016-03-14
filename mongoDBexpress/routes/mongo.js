var express = require('express');
var router = express.Router();

router.post('/insert', function(req, res, next) {
	var userid = req.body.userid;
	var sex = req.body.sex;
	var city = req.body.city;
	
	db = req.db;
	db.get('users').insert({'userid':userid,'sex':sex,'city':city},function(err,doc){
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
	
	db = req.db;
	db.get('users').remove({'userid':userid},function(err,doc){
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
	db = req.db;
	db.get('users').update({userid:userid},{'userid':userid,'sex':sex,'city':city},function(err,doc){
	//db.get('users').update({'userid':userid},{$set:{'sex':'BUSAN'}},function(err,doc){
	       if(err){
	    	   console.log(err);
	    	   res.status(500).send('update error');
	    	   return;
	       }
	       res.status(200).send("Updated");
	       
	   });
});
router.get('/list', function(req, res, next) {
	db = req.db;
	db.get('users').find({},function(err,doc){
		if(err) console.log('err');
		res.send(doc);
	});
});
router.get('/get', function(req, res, next) {
	db = req.db;
	var userid = req.query.userid
	db.get('users').findOne({'userid':userid},function(err,doc){
		if(err) console.log('err');
		res.send(doc);
	});
});

module.exports = router;
