import React from 'react';
import Fade from 'react-reveal/Fade';
import Illustration from '../../assets/images/completed.jpg';

const Completed = () => {
  return (
    <Fade>
      <div className='container mb-4'>
        <div className='col-md-4 mx-auto'>
          <img
            src={Illustration}
            className='img-fluid'
            alt='completed checkout apartement'
          />
          <div className='text-gray-500 font-weight-light'>
            We will inform you via email later once the
            transaction has been accepted
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Completed;
