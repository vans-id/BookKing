import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './InputText.scss';

const InputText = ({
  name,
  value,
  prepend,
  append,
  type,
  placeholder,
  outerClassname,
  inputClassname,
  changed,
}) => {
  const [error, setError] = useState(null);
  let pattern;
  if (type === 'email')
    pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (type === 'tel') pattern = '[0-9]*';

  const onChange = (e) => {
    const target = {
      target: {
        name,
        value: e.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(e.target.value))
        setError(errorResponse);
      else setError(null);
    }

    if (type === 'tel') {
      if (e.target.validity.valid) changed(target);
    } else changed(target);
  };

  const hasPrepend = () => {
    if (prepend)
      return (
        <div className='input-group-prepend text-gray-900'>
          <span className='input-group-text'>
            {prepend}
          </span>
        </div>
      );
  };

  const hasAppend = () => {
    if (append)
      return (
        <div className='input-group-append text-gray-900'>
          <span className='input-group-text'>
            {append}
          </span>
        </div>
      );
  };

  const hasError = () => {
    if (error)
      return (
        <span className='error-helper'>{error}</span>
      );
  };

  return (
    <div
      className={[
        'input-text mb-3',
        outerClassname,
      ].join(' ')}
    >
      <div className='input-group'>
        {hasPrepend()}
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={[
            'form-control',
            inputClassname,
          ].join(' ')}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {hasAppend()}
      </div>
      {hasError()}
    </div>
  );
};

InputText.defaultProps = {
  type: 'text',
  pattern: '',
  placeholder: 'Please type here...',
  errorResponse: 'Please match the requested format',
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  changed: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  append: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  outerClassname: PropTypes.string,
  inputClassname: PropTypes.string,
};

export default InputText;
