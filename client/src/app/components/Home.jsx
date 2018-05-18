
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => (
    <div>  
        <h1>Welcome to your moving truck managing service!</h1>
        <p>Select what you'd like to do:</p>
        <nav>
            <ul>
                <li><Link to="/VehicleCreate">Create a new truck</Link></li>
                <li><Link to="/VehicleList">List existing trucks</Link></li>
                <li><Link to="/JobCreate">Create a new job</Link></li> 
            </ul>
        </nav>
    </div> );
