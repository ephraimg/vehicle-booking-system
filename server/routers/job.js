
const express = require('express')
const router = express.Router()
const { getJobs, createJob } = require('../../db/job.js');

router.route('/')
    .get(function (req, res, next) {
        getJobs()
            .then(result => res.send(result))
            .catch(err => res.send(err));
    })
    .post(function (req, res, next) {
        const { customer, date, start, stop } = req.body;
        createJob(customer, date, start, stop)
            .then(result => {
                if (result.rowCount < 1) {
                    throw 'No vehicles available.';
                } else {
                    res.send(result);
                }
            })
            .catch(err => res.send({ error: err }));
    });

module.exports = router;
