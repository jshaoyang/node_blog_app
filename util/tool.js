var mian = {};
mian.normalize = function normalizeNumber (val) {
    var port = parseInt(val, 10);

    if (!isNaN(port)) {
        return port;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

module.exports = mian;