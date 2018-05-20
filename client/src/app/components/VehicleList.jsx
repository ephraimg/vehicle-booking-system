
import React from 'react';

export const VehicleList = ({ jobsByVehicle }) => (
    <div>  
        <h1>Existing trucks</h1>
        <ul>
            { Object.keys(jobsByVehicle).map(id =>
                <div>
                    <h3>Truck {id} {jobsByVehicle[id][0].name === 'Anonymous vehicle'
                            ? '' : '(' + jobsByVehicle[id][0].name + ')'} job assignments
                    </h3>
                    <ul>
                        { jobsByVehicle[id].map(job =>
                            <li>{`Fill in customer... Start: ${job.start}; Stop: ${job.stop}`}</li>
                        )}
                    </ul>
                </div>
            )}
        </ul>
    </div> );
