var mian = {};
var fs = require('fs');
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
	var conf = JSON.parse(fs.readFileSync('./config/app.conf.json').toString());
	var site = conf.develop_site;
	if ( env.NODE_ENV !== 'production' ) {
		temp = template.match(/(\{=[^=}]+)/ig)[0].replace('{=','');
		return template.replace( '{=' + temp + '=}' , site + temp );
	}else{
		var exists = fs.existsSync('./config/version/v' + conf.produc_version + '.json');
		if ( !exists ) {
			console.log('map 文件不存在');
			process.exit(1);
		}
		var map = fs.readFileSync('./config/version/v'+ conf.produc_version + '.json').toString();
			map = JSON.parse(map);
		temp = template.match(/(\{=[^=}]+)/ig)[0].replace('{=','');
		return template.replace( '{=' + temp + '=}' , map[temp] );
	}
};
module.exports = mian;