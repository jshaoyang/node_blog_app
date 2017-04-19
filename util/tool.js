var mian = {};
var env = process.env;
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
	var site = 'http://onlyqing.cn:8888';
	if ( env.NODE_ENV !== 'production' ) {
		temp = template.match(/(\{=[^=}]+)/ig)[0].replace('{=','');
		return template.replace( '{=' + temp + '=}' , site + temp );
	}
};

module.exports = mian;