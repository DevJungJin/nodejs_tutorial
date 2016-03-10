var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
	res.send("HTTP GET /params? "+req.query.search);
});
router.get('/:name', function(req, res, next) {
	res.send("HTTP GET /params/:name "+req.params.name);
});

/* POST */
router.post('/', function(req, res, next) {
	res.send("HTTP POST /params "+req.body.phone);
});

module.exports = router;
