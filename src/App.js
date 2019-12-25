import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';

export default function App() {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}
