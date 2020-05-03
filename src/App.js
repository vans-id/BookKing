import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import './assets/scss/style.scss';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' component={LandingPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
