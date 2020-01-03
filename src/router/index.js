import React from 'react';
import { Switch, Route } from 'react-router';

import NoMatch from '../pages/NoMatch';

import Routes from './routes';

const Router = () => (
  <Switch>
    {
      Routes.map(route => (
        <Route {...route} key={route.path} />
      ))
    }

    <Route render={(props) => <NoMatch {...props} />} />
  </Switch>
);

export default Router;