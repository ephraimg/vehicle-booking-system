
require('dotenv').config();
const { Pool, Client } = require('pg');

const connectionString = process.env.ENV === 'development'
    ? process.env.PGCONNDEV
    : process.env.PGCONNPROD

const client = new Client({
  connectionString: connectionString,
})
client.connect()

// Test connection
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})