import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Error404 from './views/Error/404';
import Home from './views/Home/Home';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
