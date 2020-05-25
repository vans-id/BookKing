import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkoutBooking } from '../store/actions/checkout';
import { fetchPage } from '../store/actions/page';

import Header from '../components/Shared/Header/Header';
import Title from '../components/DetailPage/Title/Title';
import FeaturedImage from '../components/DetailPage/FeaturedImage/FeaturedImage';
import Description from '../components/DetailPage/Description/Description';
import BookingForm from '../components/DetailPage/BookingForm/BookingForm';
import Categories from '../components/DetailPage/Categories';
import Testimony from '../components/Shared/Testimony/Testimony';
import Footer from '../components/Shared/Footer/Footer';
import Spinner from '../components/UI/Spinner/Spinner';

const DetailPage = (props) => {
  const {
    page,
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    document.title = 'Details Page';
    window.scrollTo(0, 0);

    if (!page[id]) {
      props.fetchPage(`/detail-page/${id}`, `${id}`);
    }
  }, []);

  if (!page[id]) return <Spinner />;

  const breadcrumbLabel = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Details', pageHref: '' },
  ];

  return (
    <>
      <Header {...props} />
      <Title
        breadcrumb={breadcrumbLabel}
        data={page[id]}
      />
      <FeaturedImage data={page[id].imageId} />
      <section className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <Description data={page[id]} />
          </div>
          <div className='col-md-5'>
            <BookingForm
              data={page[id]}
              startBooking={props.checkoutBooking}
            />
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row'>
          <Categories data={page[id].activityId} />
        </div>
      </div>

      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, {
  checkoutBooking,
  fetchPage,
})(DetailPage);
