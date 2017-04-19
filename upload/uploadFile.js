var express = require('express');
var path = require('path');
var router = express.Router();
const fs = require("fs-extra");


router.post('/',function (req , res , next) {
	var _path = './public' + req.headers.to + '/';
	fs.outputFileSync(_path);
	var writeStream = fs.createWriteStream( _path + req.headers.filename );
	req.on('data', function(data) {
		writeStream.write(data);
	});
	req.on('end', function() {
		writeStream.end();
		res.statusCode = 200;
		res.end("OK");
	});
});

module.exports = router;