import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import NewProduct from './pages/NewProduct';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/novo_produto" exact component={NewProduct} />
      </Switch>
    </BrowserRouter>
  );
}
