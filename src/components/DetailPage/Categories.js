import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../UI/Button/Button';

const Categories = ({ data }) => {
  const checkPopular = (stat) => {
    if (stat) {
      return (
        <div className='tag'>
          Hot{' '}
          <span className='font-weight-light'>
            Sale!
          </span>
        </div>
      );
    }
  };

  const fillCategoryItems = (params) => {
    return (
      <div className='item' key={`category-item`}>
        <Fade bottom delay={300}>
          <div className='card'>
            {checkPopular(params.isPopular)}
            <div className='img-container'>
              <img
                src={`${process.env.REACT_APP_HOST}/${params.imageUrl}`}
                alt={params.name}
                className='img-cover'
              />
            </div>
            <div className='meta-wrapper'>
              <Button
                className='stretched-link d-block text-gray-900'
                href={`/properties/${params._id}`}
                type='link'
              >
                <h5 className='h4'>{params.title}</h5>
                <span className='text-gray-500'>
                  {params.city}, {params.country}
                </span>
              </Button>
            </div>
          </div>
        </Fade>
      </div>
    );
  };

  let listCategories = data.map((category, i) => (
    <Fade bottom key={`category-${i}`}>
      <section className='section-categories col-6 col-md-3'>
        <h4 className='mb-3 font-weight-medium'>
          {category.name}
        </h4>
        <div>{fillCategoryItems(category)}</div>
      </section>
    </Fade>
  ));

  return listCategories;
};

export default Categories;
