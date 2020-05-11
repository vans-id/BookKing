import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './InputDate.scss';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme file

import formatDate from '../../../../utils/formatDate';
import IconCalendar from '../../../../assets/images/icons/ic_calendar.svg';

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const refDate = useRef();

  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

  const onDateChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name,
      },
    };
    props.onChange(target);
  };

  const handleClickOutside = (e) => {
    if (
      refDate &&
      !refDate.current.contains(e.target)
    ) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    if (focus.indexOf(1) < 0) {
      setIsShowed(false);
    }
  };

  const displayDate = `${
    value.startDate ? formatDate(value.startDate) : ''
  }${
    value.endDate
      ? ' - ' + formatDate(value.endDate)
      : ''
  }`;

  return (
    <div
      ref={refDate}
      className={[
        'input-date mb-3',
        props.outerClassName,
      ].join('')}
    >
      <div className='input-group'>
        <div className='input-group-prepend bg-gray-900'>
          <span className='input-group-text'>
            <img src={IconCalendar} alt='calendar' />
          </span>
        </div>
        <input
          type='text'
          readOnly
          className='form-control'
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className='date-range-wrapper'>
            <DateRange
              editableDateInputs={true}
              onChange={onDateChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

InputDate.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};

export default InputDate;
