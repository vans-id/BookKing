import React, { useRef } from 'react';

import Data from '../json/landingPage.json';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MostPicked from '../components/MostPicked/MostPicked';
import Categories from '../components/Categories/Categories';
import Testimony from '../components/Testimony/Testimony';
import Footer from '../components/Footer/Footer';

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
      <Categories data={Data.categories} />
      <Testimony data={Data.testimonial} />
      <Footer />
    </div>
  );
};

export default LandingPage;
