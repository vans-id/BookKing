import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import './assets/scss/style.scss';
import LandingPage from './container/LandingPage';
import DetailPage from './container/DetailPage';
import Checkout from './container/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path='/'
          exact
          component={LandingPage}
        />
        <Route
          path='/properties/:id'
          component={DetailPage}
        />
        <Route path='/checkout' component={Checkout} />
      </BrowserRouter>
    </>
  );
}

export default App;
