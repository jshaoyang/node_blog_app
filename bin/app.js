var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routerConf = require('./../config/router');
var logs = require('./../util/logger').getLogger('request');
var app = express();
// 视图引擎设置

app.set('views', path.join(__dirname, './../views/'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));
app.use(function (req,res,next) {
	logs.info(req.method + ' ' + req.url);
	next();
});
var router = Object.keys(routerConf);
router.forEach( function (path) {
 	app.use( path , require('./../routes/' + routerConf[path]));
});

// if 静态资源、控制器都没有、那么认为是没有文件 404 错误
app.use(function(req, res, next) {
	logs.info(req.url + ' 404 Not Found');
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') !== 'production') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
		  message: err.message,
		  error: err
		});
	});
}

// 生产环境报错处理
app.use(function(err, req, res, next) {
	logs.info( 'production ' + req.url + '500 error');
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
