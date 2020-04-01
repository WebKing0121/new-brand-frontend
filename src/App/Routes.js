import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Containers/Home';
import About from "./Containers/About";

const Routes = () =>(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
    </Switch>
)

export default Routes;