
const express = require('express')
const router = express.Router()
const { createJob } = require('../../db/job.js');

router.route('/')
    .post(function (req, res, next) {
        const { customer, date, start, stop } = req.body;
        if (!customer || !start || !stop) {
            res.send(new Error('Request must include customer, date, start, and stop'));
        } else {
            createJob(customer, start, stop)
                .then(result => res.send(result))
                .catch(err => res.send(err));
        }
    });

module.exports = router
