import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}
