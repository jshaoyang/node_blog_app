var logs = require('log4js');

logs.configure('config/logger.json',{});

module.exports = logs;