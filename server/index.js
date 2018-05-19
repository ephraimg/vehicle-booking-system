
require('dotenv').config();
const express = require('express');
const vehicle = require('./routers/vehicle');
const job = require('./routers/job');
const bodyParser = require('body-parser');
const database = require('../db/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.use('/job', job);
app.use('/vehicle', vehicle);

// catch-all route to deal with direct client-side urls
app.get('/*', function(req, res) {
  res.redirect('/');
})

app.listen(process.env.PORT, () => {
  console.log(`\nListening on port ${process.env.PORT}...\n`);
});
