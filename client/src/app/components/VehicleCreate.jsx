
import React from 'react';
import { StatusMessage } from './StatusMessage';
import axios from 'axios';

const VehicleCreate = props => (
    <div>  
        <h1>Create a new truck</h1>
        <form>
            <div>
                <label for="name">Provide a name:</label>
                <input name="name" value={props.name} 
                    placeholder="Name"
                    onChange={props.handleFormChange}>
                </input>
            </div>
            <div>
                <label for="start">Select its daily starting time:</label>
                <select name="start" value={props.start} onChange={props.handleFormChange}>
                    { Array(24).fill(0).map((el, idx) => {
                            const start = ('0' + idx).slice(-2) + ':00';
                            return <option value={start}>{start}</option>;
                        })
                    }
                </select>
            </div>
            <div>
                <label for="stop">Select its daily stopping time:</label>
                <select name="stop" value={props.stop} onChange={props.handleFormChange}>
                    { Array(24).fill(0).map((el, idx) => {
                            const stop = ('0' + idx).slice(-2) + ':00';
                            return <option value={stop}>{stop}</option>;
                        })
                    }
                </select>
            </div>
            <button type="button" onClick={props.createVehicle}>
                Save vehicle
            </button>
        </form>
        <StatusMessage vehicleStatus={props.vehicleStatus}/>
    </div> 
);

export { VehicleCreate };

