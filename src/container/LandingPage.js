import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchPage } from '../store/actions/page';

import Header from '../components/Shared/Header/Header';
import Hero from '../components/LandingPage/Hero/Hero';
import MostPicked from '../components/LandingPage/MostPicked/MostPicked';
import Categories from '../components/Shared/Categories/Categories';
import Testimony from '../components/Shared/Testimony/Testimony';
import Footer from '../components/Shared/Footer/Footer';
import Spinner from '../components/UI/Spinner/Spinner';

const LandingPage = (props) => {
  const refMostPicked = useRef('');

  useEffect(() => {
    document.title = 'Stayseeker | Home';
    window.scrollTo(0, 0);

    if (!props.page.landingPage) {
      props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        'landingPage'
      );
    }
  }, []);

  if (!props.page.hasOwnProperty('landingPage'))
    return <Spinner />;

  return (
    <div>
      <Header {...props} />
      <Hero
        refMostPicked={refMostPicked}
        data={props.page.landingPage.hero}
      />
      <MostPicked
        refMostPicked={refMostPicked}
        data={props.page.landingPage.mostPicked}
      />
      <Categories
        data={props.page.landingPage.categories}
      />
      <Testimony
        data={props.page.landingPage.testimonial}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(
  LandingPage
);
