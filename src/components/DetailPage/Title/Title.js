import React from 'react';
import Fade from 'react-reveal/Fade';

import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb';

const Title = ({ data, breadcrumb }) => {
  return (
    <section className='container spacing-sm mt-5'>
      <Fade bottom>
        <div className='row align-items-center'>
          <div className='col-lg'>
            <Breadcrumb
              data={breadcrumb}
              className='breadcrumb'
            />
          </div>
          <div className='col-lg-auto text-center'>
            <h1 className='h2'>{data.name}</h1>
            <span className='text-gray-400 font-weight-lighter'>
              {data.city}, {data.country}
            </span>
          </div>
          <div className='col-lg'></div>
        </div>
      </Fade>
    </section>
  );
};

export default Title;
