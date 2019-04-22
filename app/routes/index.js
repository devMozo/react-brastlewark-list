import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/village/:name" component={About} />
      </Switch>
    </BrowserRouter>
  );
};
