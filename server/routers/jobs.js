
var express = require('express')
var router = express.Router()

router.route('/')
    .get(function (req, res, next) {
        res.send('this is the jobs api');
        next();
    })
    .post(function (req, res) {
        res.send(req.body);
        next();
    });

module.exports = router
