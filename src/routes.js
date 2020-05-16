import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Photo from './pages/Photo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photo/:id" component={Photo} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
