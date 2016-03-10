var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
	var name = req.session.name;
	req.session.name = 'terry'
	res.send("Session.name is :"+name);
});

module.exports = router;
