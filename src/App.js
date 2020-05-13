import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import './assets/scss/style.scss';
import LandingPage from './container/LandingPage';
import DetailPage from './container/DetailPage';

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
      </BrowserRouter>
    </>
  );
}

export default App;
