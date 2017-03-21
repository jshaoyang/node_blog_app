var express = require('express');
var mongodb = require('mongodb').MongoClient;
var router = express.Router();

/* GET index page. */
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Vue-router' });
});
router.get('/*', function(req, res, next) {
    res.redirect('/index')
});
router.post('/*', function(req, res, next) {
    mongodb.connect('mongodb://localhost:27017/blog',function (err,db) {
        let documents = db.collection('users');
        documents.find().toArray().then(function (data) {
            let _data = data.map(function (i) {
                return {name:i.a};
            })
            res.send(JSON.stringify(_data));
            db.close();
        })
    })
    
});

module.exports = router;
