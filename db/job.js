
const client = require('./index.js')();

const createJob = (customer, date, start, stop) => {
    const text = 'INSERT INTO job (customer, during, id_vehicle) ' +
        'SELECT customer, tstzrange($3, $4), id FROM'
    const freeVehicles = '(SELECT * FROM vehicle v WHERE ' +
        '(' +
            'tstzrange($2 + v.start, $2 + v.stop) >= tstzrange($3, $4) ' +
            'AND NOT EXISTS (' +
                'SELECT 1 FROM job j WHERE ' +
                'v.id = j.vehicle_id AND ' +
                'j.during && tstzrange($3, $4)' + 
            ')' +
        ')) AS free_vehicles';
    client.query({
        text,
        values: [customer, date, start, stop]
        // check results
            // if empty, send back error
            // if non-empty, save new row with first entry, return the result

    });
};

module.exports = {
    createJob
};
