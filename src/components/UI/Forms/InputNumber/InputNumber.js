import React from 'react';

import './InputNumber.scss';
import PropTypes from 'prop-types';

const InputNumber = (props) => {
  const {
    value,
    placeholder,
    name,
    min,
    max,
    prefix,
    suffix,
    isSuffixPlural,
  } = props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    if (value > min) {
      onChange({
        target: {
          name,
          value: +value - 1,
        },
      });
    }
  };

  const plus = () => {
    if (value < max) {
      onChange({
        target: {
          name,
          value: +value + 1,
        },
      });
    }
  };

  return (
    <div
      className={[
        'input-number mb-3',
        props.outerClassName,
      ].join(' ')}
    >
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span
            className='input-group-text minus'
            onClick={minus}
          >
            -
          </span>
        </div>
        <input
          readOnly
          min={min}
          max={max}
          name={name}
          pattern='[0-9*]'
          className='form-control'
          placeholder={placeholder ? placeholder : '0'}
          value={`${prefix}${value}${
            isSuffixPlural && value > 1
              ? suffix + 's'
              : suffix
          }`}
          onChange={onChange}
        />
        <div className='input-group-append'>
          <span
            className='input-group-text plus'
            onClick={plus}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: '',
};

InputNumber.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  isSuffixPlural: PropTypes.bool,
};

export default InputNumber;
