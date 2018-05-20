
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
            vehicleWaiting: false,
            vehicleSuccess: false,
            vehicleFailure: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleStopChange = this.handleStopChange.bind(this);
        this.clearVehicleStatus = this.clearVehicleStatus.bind(this);
        this.createVehicle = this.createVehicle.bind(this);
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleStartChange(e) {
        this.setState({ start: e.target.value });
    }
    handleStopChange(e) {
        this.setState({ stop: e.target.value });
    }
    clearVehicleStatus() {
        this.setState({
            vehicleWaiting: false,
            vehicleSuccess: false,
            vehicleFailure: false
        });
    }
    createVehicle(e) {
        this.setState({ vehicleWaiting: true });
        const config = {
            name: this.state.name || 'Anonymous vehicle',
            start: this.state.start,
            stop: this.state.stop
        };
        axios.post('/vehicles', config)
            .then(res => this.setState({ vehicleWaiting: false, vehicleSuccess: true }))
            .catch(err => this.setState({ vehicleWaiting: false, vehicleFailure: true }))
            .finally(() => setTimeout(this.clearVehicleStatus, 2000));
    }
    render() { return (
        <VehicleComponent 
            start={this.state.start}
            stop={this.state.stop}
            vehicleWaiting={this.state.vehicleWaiting}
            vehicleSuccess={this.state.vehicleSuccess}
            vehicleFailure={this.state.vehicleFailure}
            handleNameChange={this.handleNameChange}
            handleStartChange={this.handleStartChange}
            handleStopChange={this.handleStopChange}
            clearVehicleStatus={this.clearVehicleStatus}
            createVehicle={this.createVehicle}
        />
    )};
}

export { VehicleCreate };
