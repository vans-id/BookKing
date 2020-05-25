import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import './Shared.scss';
import InputText from '../UI/Forms/InputText/InputText';

const Information = ({
  data,
  ItemDetails,
  checkout,
  changed,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <div className='container mb-4'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-5 py-5 left-content'>
            <Fade delay={300}>
              <div className='card'>
                <figure
                  className='img-wrapper'
                  style={{ height: 270 }}
                >
                  <img
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                    className='img-cover'
                  />
                </figure>
                <div className='row align-items-center'>
                  <div className='col-sm'>
                    <div className='meta-wrapper'>
                      <h5>{ItemDetails.title}</h5>
                      <span className='text-gray-500'>
                        {ItemDetails.city},{' '}
                        {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className='col-sm-auto'>
                    <span>
                      $
                      {+checkout.duration *
                        ItemDetails.price}{' '}
                      USD
                      <span className='text-gray-500 font-weight-light'>
                        {' '}
                        per{' '}
                      </span>
                      {checkout.duration}{' '}
                      {ItemDetails.unit}
                      {+checkout.duration > 1
                        ? 's'
                        : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-5 py-5 right-content'>
            <Fade delay={600}>
              <label htmlFor='firstName'>
                First Name
              </label>
              <InputText
                id='firstName'
                name='firstName'
                value={data.firstName}
                changed={changed}
              />
              <label htmlFor='lastName'>
                Last Name
              </label>
              <InputText
                id='lastName'
                name='lastName'
                value={data.lastName}
                changed={changed}
              />
              <label htmlFor='email'>
                Email Address
              </label>
              <InputText
                id='email'
                name='email'
                type='email'
                value={data.email}
                changed={changed}
              />
              <label htmlFor='phone'>
                Phone Number
              </label>
              <InputText
                id='phone'
                name='phone'
                type='tel'
                value={data.phone}
                changed={changed}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Information;
