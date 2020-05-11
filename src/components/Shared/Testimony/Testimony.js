import React from 'react';
import Rotate from 'react-reveal/Rotate';

import './Testimony.scss';
import TestimonialFrame from '../../../assets/images/testimonial-frame.jpg';
import Stars from '../../UI/Stars/Stars';
import Button from '../../UI/Button/Button';

const Testimony = ({ data }) => {
  return (
    <Rotate bottom right>
      <section className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <div className='testimonial-hero'>
              <img
                src={data.imageUrl}
                alt='testimonial'
                className='position-absolute'
                style={{ zIndex: 2 }}
              />
              <img
                src={TestimonialFrame}
                alt='testimonial'
                className='position-absolute testimonial-frame'
              />
            </div>
          </div>
          <div className='col-lg-7 testimonial-content'>
            <h4 className='mb-4'>{data.name}</h4>
            <Stars
              value={data.rate}
              width={40}
              height={40}
              spacing={4}
            />
            <h5 className='h2 line-height-2 my-3'>
              {data.content}
            </h5>
            <span className='text-gray-500 font-weight-light'>
              {data.familyName},{' '}
              {data.familyOccupation}
            </span>

            <div>
              <Button
                className='btn px-5 mt-5'
                hasShadow
                isPrimary
                type='link'
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Rotate>
  );
};

export default Testimony;
