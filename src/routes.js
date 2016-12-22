import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  MenuView,
  NotFound,
} from 'views';


export default (
  <Route path="/" component={MenuView}>
    <IndexRoute component={MenuView} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
