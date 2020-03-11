import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Error404 from './views/Error/404';
import Home from './views/Home/Home';
import TrackerForm from './views/TrackerForm/TrackerForm';
import TrackerList from './views/TrackerList/TrackerList';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/form" component={TrackerForm} exact />
      <Route path="/detail" component={TrackerList} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
