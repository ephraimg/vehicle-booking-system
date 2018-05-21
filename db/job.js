
const client = require('./index.js')();

const getJobs = () => 
    client.query('SELECT * FROM job');

const createJob = (customer, date, start, stop) => {
    const vehicleQuery = 'SELECT * FROM vehicle v ' +
                    'WHERE ' +
                        'tstzrange($2::timestamptz + v.start, $2::timestamptz + v.stop) @> ' +
                        'tstzrange($3, $4) ' + 
                    'AND ' +
                        'NOT EXISTS (' +
                            'SELECT 1 FROM job j ' +
                                'WHERE j.id_vehicle = v.id ' +
                                'AND j.during && tstzrange($3, $4)' +
                        ') ' +
                    'ORDER BY RANDOM() LIMIT 1';
    const insertQuery = `WITH free_vehicle AS (${vehicleQuery}) ` +
                    'INSERT INTO job (customer, during, id_vehicle) ' +
                    'SELECT $1, tstzrange($3, $4), free_vehicle.id FROM free_vehicle';
    return client.query({
        text: insertQuery,
        values: [customer, date, start, stop]
    });
};

module.exports = {
    getJobs, 
    createJob
};
