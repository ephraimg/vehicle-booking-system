
require('dotenv').config();
const { Pool, Client } = require('pg');

let client;

const conn = process.env.ENV === 'development'
    ? process.env.PGCONNDEV
    : process.env.PGCONNPROD

const connectDB = () => {
    if (!client) {
        client = new Client({ connectionString: conn });
        client.connect()
        // Test connection
        client.query('SELECT NOW()', (err, res) => {
            if (err) { 
                console.log('\nError connecting to DB: \n', err); 
            } else {
                console.log('\nConnected to DB\n');
            }
        });
    }
    return client;
};


module.exports = connectDB; 