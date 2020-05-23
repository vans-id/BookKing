import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <>
      <div className={classes.Loader}>Loading...</div>
      <h5 className='text-primary text-center mt-5'>
        Starting your next vacation
      </h5>
    </>
  );
};

export default Spinner;
