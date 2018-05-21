
const client = require('./index.js')();

const createVehicle = (name, start, stop) => 
    client.query({
        text: 'INSERT INTO vehicle(name, start, stop) VALUES($1, $2, $3) RETURNING *;',
        values: [name, start, stop]
    });

const getVehicles = () =>
    client.query('SELECT vehicle.id as id_vehicle, vehicle.name, ' +
        'job.id as id_job, job.customer, lower(job.during) as start, upper(job.during) as stop ' + 
        'FROM vehicle LEFT JOIN job ON (vehicle.id = job.id_vehicle)');

module.exports = {
    createVehicle,
    getVehicles
};
