import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Containers/Home/Home';
import About from "./Containers/About/About";
import RegisterConfirmation from "./Containers/RegisterConfirmation/RegisterConfirmation";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/register-confirmation' component={RegisterConfirmation} />
  </Switch>
)

export default Routes;
