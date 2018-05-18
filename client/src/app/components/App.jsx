
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { VehicleCreate } from './VehicleCreate';
import { VehicleList } from './VehicleList';
import { JobCreate } from './JobCreate';

export const App = props => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/VehicleCreate" component={VehicleCreate}/>
        <Route path="/VehicleList" component={VehicleList}/>
        <Route path="/JobCreate" component={JobCreate}/>
    </Switch> );
