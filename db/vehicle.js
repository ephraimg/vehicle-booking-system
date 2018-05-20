
const client = require('./index.js')();

const createVehicle = (name, start, stop) => 
    client.query({
        text: 'INSERT INTO vehicle(name, start, stop) VALUES($1, $2, $3) RETURNING *;',
        values: [name, start, stop]
    });

const getVehicles = () =>
    client.query('SELECT vehicle.id as vehicle_id, vehicle.name as vehicle_name, ' +
        'job.customer, job.during FROM vehicle, job ' +
        ' WHERE (vehicle.id = job.id_vehicle);');

module.exports = {
    createVehicle,
    getVehicles
};
