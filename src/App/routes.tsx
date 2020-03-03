import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';
import PrivateRoute from './Components/PrivateRoute';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}
