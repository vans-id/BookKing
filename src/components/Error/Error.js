import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../UI/Button/Button';

const Error = (props) => {
  return (
    <div className='container'>
      <div
        className='row align-items-center justify-content-center text-center'
        style={{ height: '90vh' }}
      >
        <div className='col-4'>
          Oopps! Something went wrong!
          <Button
            className='btn mt-5'
            type='button'
            isLight
            onClick={() => props.history.goBack()}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Error);
