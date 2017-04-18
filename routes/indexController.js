var express = require('express');
var mongodb = require('mongodb').MongoClient;
var tool = require('./../util/tool');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Vue-asdfasd'},function (err , page) {
        res.send(tool.tempPlace(page));
    });
});
// router.post('/*', function(req, res, next) {
//     mongodb.connect('mongodb://localhost:27017/blog',function (err,db) {
//         let documents = db.collection('users');
//         documents.find().toArray().then(function (data) {
//             let _data = data.map(function (i) {
//                 return {name:i.a};
//             })
//             res.send(JSON.stringify(_data));
//             db.close();
//         })
//     })
    
// });

module.exports = router;
