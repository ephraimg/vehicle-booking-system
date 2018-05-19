
require('dotenv').config();
const express = require('express');
const vehicles = require('./routers/vehicles');
const jobs = require('./routers/jobs');
const bodyParser = require('body-parser');
const database = require('../db/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.use('/jobs', jobs);
app.use('/vehicles', vehicles);

// catch-all route to deal with direct client-side urls
app.get('/*', function(req, res) {
  res.redirect('/');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
