
import React from 'react';
import axios from 'axios';
import { VehicleList as VehicleComponent } from '../components/VehicleList';

class VehicleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jobsByVehicle: {} };
    }
    componentDidMount() {
        axios.get('/vehicles')
            .then(result => {
                const jbv = {};
                result.data.rows.forEach(row => {
                    jbv[row.id_vehicle] = jbv[row.id_vehicle] || { jobs: [] };
                    jbv[row.id_vehicle].name = row.name;
                    if (row.customer) {
                        jbv[row.id_vehicle].jobs.push({
                            customer: row.customer,
                            start: row.start,
                            stop: row.stop
                        });
                    }
                });
                this.setState({ jobsByVehicle: jbv });
            })
            .catch(err => console.log(err));
    }
    render() {
        return <VehicleComponent jobsByVehicle={this.state.jobsByVehicle}/>;
    }
}

export { VehicleList };
