var express = require('express');
var path = require('path');
var logs = require('./../util/logger').getLogger('upload');
var router = express.Router();
const fs = require("fs-extra");


router.post('/',function (req , res , next) {
	var _path = './public' + req.headers.to + '/';
	var file =  _path + req.headers.filename;
	fs.emptyDir( _path ,err => {
		if (err) {
			if (err.errno == -13 ) {
				res.statusCode = 500;
				logs.info( file + '  文件创建权限不够');
				return res.end('文件创建权限不够');
			}else{
				res.statusCode = 500;
				logs.info( file + '  文件创建错误');
				return res.end('文件创建错误');
			}
		}
		var writeStream = fs.createWriteStream( file );
		req.on('data', function(data) {
			writeStream.write(data);
		});

		req.on('end', function() {
			writeStream.end();
			res.statusCode = 200;
			res.end('上传完成');
			logs.info( file + '  上传完成');
		});
	});
});

module.exports = router;