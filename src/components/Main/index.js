import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../components/containers/Series/index';
import SingleSeries from '../../components/containers/SingleSeries/SingleSeries';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
