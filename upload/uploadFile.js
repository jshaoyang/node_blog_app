var express = require('express');
var formidable = require('formidable');
var router = express.Router();
router.post('/',function (req , res , next) {
    let file = req;
    var form = new formidable.IncomingForm();
    form.uploadDir = "./uploads/";
    form.parse(req, function(err, fields, files) {
      // res.writeHead(200, {'content-type': 'text/plain'});
      // res.write('received upload:\n\n');
     console.log(fields,files);
      res.send(200,false,'上传成功');
    });
    // console.log(file);
    // res.send(200,false,'上传成功');
});

module.exports = router;