
import React from 'react';
import axios from 'axios';
import { VehicleList as VehicleComponent } from '../components/VehicleList';

class VehicleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };
    }
    componentDidMount() {
        axios.get('/vehicles')
            .then(result => {
                this.setState({ rows: result.data.rows });
            })
            .catch(err => console.log(err));
    }
    render() { 
        const jobsByVehicle = {};
        this.state.rows.forEach(row => {
            jobsByVehicle[row.id] = jobsByVehicle[row.id] || [];
            jobsByVehicle[row.id].push({
                name: row.name,
                start: row.start,
                stop: row.stop
            });
        })
        return <VehicleComponent jobsByVehicle={jobsByVehicle}/>;
    }
}

export { VehicleList };
