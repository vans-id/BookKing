import React, { useEffect, useRef } from 'react';

import Data from '../json/landingPage.json';
import Header from '../components/Shared/Header/Header';
import Hero from '../components/LandingPage/Hero/Hero';
import MostPicked from '../components/LandingPage/MostPicked/MostPicked';
import Categories from '../components/Shared/Categories/Categories';
import Testimony from '../components/Shared/Testimony/Testimony';
import Footer from '../components/Shared/Footer/Footer';

const LandingPage = (props) => {
  const refMostPicked = useRef('');

  useEffect(() => {
    document.title = 'Stayseeker | Home';
    window.scrollTo(0, 0);
  }, []);

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
