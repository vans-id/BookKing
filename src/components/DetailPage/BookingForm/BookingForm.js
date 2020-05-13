import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import './BookingForm.scss';
import usePrevious from '../../../hooks/usePrevious';
import InputNumber from '../../UI/Forms/InputNumber/InputNumber';
import InputDate from '../../UI/Forms/InputDate/InputDate';
import Button from '../../UI/Button/Button';

const BookingForm = (props) => {
  const [duration, setDuration] = useState(1);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const prevDuration = usePrevious(duration);
  const prevDate = usePrevious(date);

  const updateData = (e) => {
    if (e.target.name === 'date') {
      setDate(e.target.value);
    } else {
      setDuration(e.target.value);
    }
  };

  useEffect(() => {
    if (prevDate !== date) {
      const startDate = new Date(date.startDate);
      const endDate = new Date(date.endDate);
      const countDuration = new Date(
        endDate - startDate
      ).getDate();

      setDuration(countDuration);
    }

    if (prevDuration !== duration) {
      const startDate = new Date(date.startDate);
      const endDate = new Date(
        startDate.setDate(
          startDate.getDate() + +duration - 1
        )
      );

      setDate({ ...date, endDate });
    }
  }, [date, duration]);

  const { data, startBooking } = props;

  return (
    <Fade bottom>
      <div className='card bordered section-booking'>
        <h4>Start Booking</h4>
        <h5 className='h2 text-green mb-4'>
          ${data.price}{' '}
          <span className='text-gray-500 font-weight-light'>
            per {data.unit}
          </span>
        </h5>

        <label htmlFor='duration'>
          How long you will stay?
        </label>
        <InputNumber
          max={30}
          suffix={' night'}
          isSuffixPlural
          onChange={updateData}
          name={'duration'}
          value={duration}
        />
        <label htmlFor='date'>Pick a date</label>
        <InputDate
          max={30}
          onChange={updateData}
          name={'date'}
          value={date}
        />

        <h6 className='text-gray-500 font-weight-lighter pay-label'>
          You will pay{' '}
          <span className='text-gray-900 font-weight-normal'>
            ${data.price * duration} USD
          </span>{' '}
          per{' '}
          <span className='text-gray-900 font-weight-normal'>
            {duration} {data.unit}
          </span>
        </h6>

        <Button
          className='btn'
          hasShadow
          isPrimary
          isBlock
          onClick={startBooking}
        >
          Continue to book
        </Button>
      </div>
    </Fade>
  );
};

BookingForm.propTypes = {
  data: PropTypes.object,
  startBooking: PropTypes.func,
};

export default BookingForm;
