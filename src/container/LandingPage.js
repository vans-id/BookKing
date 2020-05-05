import React from 'react';

import Data from '../json/landingPage.json';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const LandingPage = (props) => {
  return (
    <div>
      <Header {...props} />
      <Hero data={Data.hero} />
    </div>
  );
};

export default LandingPage;
