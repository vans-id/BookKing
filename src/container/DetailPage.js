import React, { useEffect } from 'react';

import ItemDetails from '../json/itemDetails.json';
import Header from '../components/Shared/Header/Header';
import Title from '../components/DetailPage/Title/Title';
import FeaturedImage from '../components/DetailPage/FeaturedImage/FeaturedImage';
import Description from '../components/DetailPage/Description/Description';
import BookingForm from '../components/DetailPage/BookingForm/BookingForm';
import Categories from '../components/Shared/Categories/Categories';
import Testimony from '../components/Shared/Testimony/Testimony';
import Footer from '../components/Shared/Footer/Footer';

const DetailPage = (props) => {
  useEffect(() => {
    document.title = 'Details Page';
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbLabel = [
    { pageTitle: 'Home', pageHref: '' },
    { pageTitle: 'House Details', pageHref: '' },
  ];

  return (
    <>
      <Header {...props} />
      <Title
        breadcrumb={breadcrumbLabel}
        data={ItemDetails}
      />
      <FeaturedImage data={ItemDetails.imageUrls} />
      <section className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <Description data={ItemDetails} />
          </div>
          <div className='col-md-5'>
            <BookingForm
              data={ItemDetails}
              startBooking={() => {}}
            />
          </div>
        </div>
      </section>
      <Categories data={ItemDetails.categories} />
      <Testimony data={ItemDetails.testimonial} />
      <Footer />
    </>
  );
};

export default DetailPage;
