
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = props => (
    <div class="nav">  
        <Link to="/">Home</Link>{'  -  '} 
        <Link to="/VehicleCreate">Create a new truck</Link>{'  -  '} 
        <Link to="/VehicleList">List active trucks</Link>{'  -  '}
        <Link to="/JobCreate">Create a new job</Link>
        <hr />
    </div> );
