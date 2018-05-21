
import React from 'react';

const StatusMessage = ({ vehicleStatus, jobStatus }) => {

    let statusMessage = null;

    if (vehicleStatus) {
        if (vehicleStatus === 'waiting') {
            statusMessage = <p>Please wait a moment...</p>;
        } else if (vehicleStatus === 'success') {
            statusMessage = <p>Vehicle saved successfully!</p>;
        } else {
            statusMessage = <p>Error! Please try again.<br/>{vehicleStatus}</p>;
        }
    } else if (jobStatus) {
        if (jobStatus === 'waiting') {
            statusMessage = <p>Please wait a moment...</p>;
        } else if (jobStatus === 'success') {
            statusMessage = <p>Job saved successfully!</p>;
        } else {
            statusMessage = <p>Error! Please try again.<br/>{jobStatus}</p>;
        }        
    }

    return (<div>{ statusMessage }</div>);
}

export { StatusMessage };

