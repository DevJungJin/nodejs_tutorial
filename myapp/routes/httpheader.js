var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
	var userAgent = req.get('User-Agent');
	
	res.set('x-agent-name','terry');
	res.set('x-agent-app','node.js');
	
	res.send("UserAgent :"+userAgent);
});

module.exports = router;
