import { Home } from 'containers/Home/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Village } from '../containers/Village/Village';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/village/:name" component={Village} />
    </Switch>
  );
};
