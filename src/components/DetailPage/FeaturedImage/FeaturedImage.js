import React from 'react';
import Fade from 'react-reveal/Fade';

const FeaturedImage = ({ data }) => {
  const isFirstIndex = (index) => {
    if (index === 0) {
      return 'column-7 row-2';
    } else {
      return 'column-5 row-1';
    }
  };

  let images = data.map((item, i) => (
    <div
      key={`featured-image-${i}`}
      className={`item ${isFirstIndex(i)}`}
    >
      <Fade bottom delay={300 * i}>
        <div className='card h-100'>
          <figure className='img-wrapper'>
            <img
              src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
              alt={item._id}
              className='img-cover'
            />
          </figure>
        </div>
      </Fade>
    </div>
  ));

  return (
    <section className='container'>
      <div className='container-grid sm'>{images}</div>
    </section>
  );
};

export default FeaturedImage;
