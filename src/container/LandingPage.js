import React, { useRef } from 'react';

import Data from '../json/landingPage.json';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MostPicked from '../components/MostPicked/MostPicked';

const LandingPage = (props) => {
  const refMostPicked = useRef();

  return (
    <div>
      <Header {...props} />
      <Hero
        refMostPicked={refMostPicked}
        data={Data.hero}
      />
      <MostPicked
        refMostPicked={refMostPicked}
        data={Data.mostPicked}
      />
    </div>
  );
};

export default LandingPage;
