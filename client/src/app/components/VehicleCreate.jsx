
import React from 'react';
import axios from 'axios';

const VehicleCreate = props => (
    <div>  
        <h1>Create a new truck</h1>
        <form>
            <div>
                <label for="name">Provide a name:</label>
                <input name="name" value={props.name} 
                    placeholder="Anonymous vehicle"
                    onChange={props.handleNameChange}>
                </input>
            </div>
            <div>
                <label for="start">Select its daily starting time:</label>
                <select name="start" value={props.start} onChange={props.handleStartChange}>
                    { Array(24).fill(0).map((el, idx) =>
                        <option value={idx}>{('0' + idx).slice(-2) + ':00'}</option>)
                    }
                </select>
            </div>
            <div>
                <label for="stop">Select its daily stopping time:</label>
                <select name="stop" value={props.stop} onChange={props.handleStopChange}>
                    { Array(24).fill(0).map((el, idx) => 
                        <option value={idx}>{('0' + idx).slice(-2) + ':00'}</option>)
                    }
                </select>
            </div>
            <button type="button" onClick={props.createVehicle}>
                Save vehicle
            </button>
        </form>
        <div>
            { props.vehicleWaiting ? 'Please wait a moment...' : null }
            { props.vehicleSuccess ? 'Vehicle saved successfully!' : null }
            { props.vehicleFailure ? 'Error! Please try again.' : null }
        </div>
    </div>
);

export { VehicleCreate };

