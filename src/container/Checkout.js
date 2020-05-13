import React, { useEffect } from 'react';
import Header from '../components/Shared/Header/Header';

const Checkout = () => {
  useEffect(() => {
    document.title = 'Checkout';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header isCentered />
    </>
  );
};

export default Checkout;
