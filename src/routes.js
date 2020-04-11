import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import NewProduct from './pages/NewProduct';
import NewOrder from './pages/NewOrder';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/novo_produto" exact component={NewProduct} />
        <Route path="/nova_compra" exact component={NewOrder} />
      </Switch>
    </BrowserRouter>
  );
}
