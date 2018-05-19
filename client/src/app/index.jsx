
import '../styles.css'; // to let webpack plugin find CSS

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { VehicleCreate } from './containers/VehicleCreate';
import { VehicleList } from './containers/VehicleList';
import { JobCreate } from './containers/JobCreate';

render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/VehicleCreate" component={VehicleCreate}/>
            <Route path="/VehicleList" component={VehicleList}/>
            <Route path="/JobCreate" component={JobCreate}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('app'));
