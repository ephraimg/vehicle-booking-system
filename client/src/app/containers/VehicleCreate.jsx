
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { VehicleCreate as VehicleComponent } from '../components/VehicleCreate';

class VehicleCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            start: '08:00',
            stop: '17:00',
            vehicleStatus: null
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.clearVehicleStatus = this.clearVehicleStatus.bind(this);
        this.createVehicle = this.createVehicle.bind(this);
    }
    handleFormChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    clearVehicleStatus() {
        this.setState({ vehicleStatus: null });
    }
    createVehicle(e) {
        if (!this.state.name || !this.state.start || !this.state.stop) {
            this.setState({ vehicleStatus: 'All form fields must be completed.' });
            return setTimeout(this.clearVehicleStatus, 2000);
        }
        this.setState({ vehicleStatus: 'waiting' });
        const config = {
            name: this.state.name,
            start: this.state.start,
            stop: this.state.stop
        };
        axios.post('/vehicles', config)
            .then(res => this.setState({ vehicleStatus: 'success' }))
            .catch(err => this.setState({ vehicleStatus: err }))
            .finally(() => setTimeout(this.clearVehicleStatus, 2000));
    }
    render() { return (
        <VehicleComponent 
            start={this.state.start}
            stop={this.state.stop}
            vehicleStatus={this.state.vehicleStatus}
            handleFormChange={this.handleFormChange}
            clearVehicleStatus={this.clearVehicleStatus}
            createVehicle={this.createVehicle}
        />
    )}
}

export { VehicleCreate };
