
var express = require('express')
var router = express.Router()

router.route('/')
    .get(function (req, res, next) {
        res.send('this is the vehicles api');
        next();
    })
    .post(function (req, res, next) {
        res.send(req.body);
        next();
    });

module.exports = router
