import React from 'react';
import { Switch, Route } from 'react-router';

import NoMatch from './pages/NoMatch';

import routes from './routes';

export default function App() {
  return (
    <Switch>
      {
        routes.map(route => (
          <Route {...route} key={route.path} />
        ))
      }

      <Route render={(props) => <NoMatch {...props} />} />
    </Switch>
  );
}
