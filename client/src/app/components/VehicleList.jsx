
import React from 'react';
import moment from 'moment';

export const VehicleList = ({ jobsByVehicle: jbv }) => (
     <div>  
        <h1>Active trucks</h1>
        <ul>{ 
            Object.keys(jbv).map(id =>
            <div>
                <h4>
                    Truck {id} { jbv[id].name !== ''
                    ? '(' + jbv[id].name + ') job assignments'
                    : 'unnamed' }
                </h4>
                <ul>{ 
                    jbv[id].jobs.length < 1 
                        ? <li>No assignments</li> 
                        : jbv[id].jobs.map(job => 
                        <li>{ 
                            `${moment(job.start).format('MMM D YYYY, HH:mm')} 
                                to ${moment(job.stop).format('HH:mm')} -  
                            ${job.customer}`
                        }</li>
                )}</ul>
            </div>
        )}</ul>
    </div> );
