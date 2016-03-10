var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
	var name = req.signedCookies['name'];
	res.cookie('name', 'myname is terry', { expires: new Date(Date.now() + 900000), httpOnly: true ,signed:true});
	res.send("name from cookie :"+name);
});

module.exports = router;
