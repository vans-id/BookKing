import React from 'react';
import Fade from 'react-reveal/Fade';

import InputText from '../UI/Forms/InputText/InputText';

const Information = ({
  data,
  ItemDetails,
  checkout,
  changed,
}) => {
  return (
    <Fade>
      <div className='container mb-4'>
        <div className='row justify-content-center align-items-center'>
          <div
            className='col-5 border-right py-5'
            style={{ paddingRight: 80 }}
          >
            <Fade delay={300}>
              <div className='card'>
                <figure
                  className='img-wrapper'
                  style={{ height: 270 }}
                >
                  <img
                    src={ItemDetails.ImageUrls[0].url}
                    alt={ItemDetails.name}
                    className='img-cover'
                  />
                </figure>
                <div className='row align-items-center'>
                  <div className='col'>
                    <div className='meta-wrapper'>
                      <h5>{ItemDetails.name}</h5>
                      <span className='text-gray-500'>
                        {ItemDetails.city},{' '}
                        {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className='col-auto'>
                    <span>
                      $
                      {+checkout.duration *
                        ItemDetails.price}{' '}
                      USD
                      <span className='text-gray-500'>
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

          <div
            className='col-5 py-5'
            style={{ marginLeft: 80 }}
          >
            <Fade delay={600}>
              <label htmlFor='firstName'>
                First Name
              </label>
              <InputText
                id='firstName'
                name='firstName'
                value={data.firstName}
                onChange={changed}
              />
              <label htmlFor='lastName'>
                Last Name
              </label>
              <InputText
                id='lastName'
                name='lastName'
                value={data.lastName}
                onChange={changed}
              />
              <label htmlFor='email'>
                Email Address
              </label>
              <InputText
                id='email'
                name='email'
                type='email'
                value={data.email}
                onChange={changed}
              />
              <label htmlFor='phone'>
                Phone Number
              </label>
              <InputText
                id='phone'
                name='phone'
                type='tel'
                value={data.phone}
                onChange={changed}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Information;
