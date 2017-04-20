var mian = {};
var env = process.env;
var conf = require('./../config/app.conf');
var map = require('./../config/version/v'+ conf.produc_version );

mian.normalize = function normalizeNumber (val) {
	var port = parseInt(val, 10);

	if (!isNaN(port)) {
		return port;
	}

	if (port >= 0) {
		return port;
	}

	return false;
};
mian.tempPlace = function (template) {
	var temp = '';
	var site = conf.develop_site;
	if ( env.NODE_ENV !== 'production' ) {
		temp = template.match(/(\{=[^=}]+)/ig)[0].replace('{=','');
		return template.replace( '{=' + temp + '=}' , site + temp );
	}else{
		temp = template.match(/(\{=[^=}]+)/ig)[0].replace('{=','');
		return template.replace( '{=' + temp + '=}' , map[temp] );
	}
};
module.exports = mian;