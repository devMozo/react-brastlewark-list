import './index.scss';

import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppRouter } from 'routes/AppRouter';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <AppRouter />
  </Router>,
  document.getElementById('app'),
);
