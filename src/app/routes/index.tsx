import * as React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import { App, Home, Repos } from 'containers';
import { NotFound } from 'components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="repos" component={Repos} />
    <Route path="404" component={NotFound} />
    <Redirect from="*" to="404" />
  </Route>
);
