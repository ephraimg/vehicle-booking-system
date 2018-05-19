
const client = require('./index.js')();

const createVehicle = (name, start, stop) => 
    client.query({
        text: 'INSERT INTO vehicle(name, start, stop) VALUES($1, $2, $3) RETURNING *;',
        values: [name, start, stop]
    });

const getVehicles = () =>
    client.query('SELECT * FROM vehicle')

module.exports = {
    createVehicle,
    getVehicles
};
