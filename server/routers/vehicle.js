
const express = require('express');
const router = express.Router();
const { createVehicle, getVehicles } = require('../../db/vehicle.js');

router.route('/')
    .get(function (req, res, next) {
        getVehicles()
            .then(result => {
                res.send(result);
            })
            .catch(err => res.send(err))
    })
    .post(function (req, res, next) {
        const { name, start, stop } = req.body;
        createVehicle(name, start, stop)
            .then(result => res.send(result))
            .catch(err => res.send(err))
    });

module.exports = router;
