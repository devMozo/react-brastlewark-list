import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from 'routes/AppRouter';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <AppRouter />
  </Router>,
  document.getElementById('app'),
);
