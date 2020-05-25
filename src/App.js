import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './assets/scss/style.scss';
import LandingPage from './container/LandingPage';
import Spinner from './components/UI/Spinner/Spinner';
import Error from './components/Error/Error';

const DetailPage = React.lazy(() => {
  return import('./container/DetailPage');
});

const Checkout = React.lazy(() => {
  return import('./container/Checkout');
});

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
          <Route
            path='/checkout'
            component={Checkout}
          />
          <Route path='*' component={Error} />
        </BrowserRouter>
        <ToastContainer></ToastContainer>
      </Suspense>
    </>
  );
}

export default App;
