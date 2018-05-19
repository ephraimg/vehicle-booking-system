
const express = require('express');
const router = express.Router();
const createVehicle = require('../../db/vehicle.js');

router.route('/')
    .get(function (req, res, next) {
        res.send('this is the vehicles api');
        next();
    })
    .post(function (req, res, next) {
        const { name, start, stop } = req.body;
        createVehicle(name, start, stop)
            .then(result => {
                res.send(result);
                next();
            })
            .catch(err => res.send(err))
    });

module.exports = router
