import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './InputFile.scss';

const InputFile = (
  name,
  value,
  prepend,
  append,
  accept,
  placeholder,
  outerClassname,
  inputClassname,
  changed
) => {
  const refInputFile = useRef(null);

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
          accept={accept}
          ref={refInputFile}
          name={name}
          type='file'
          className='d-none'
          value={value}
          onChange={changed}
        />
        <input
          onClick={() => refInputFile.current.click()}
          value={value}
          placeholder={placeholder}
          className={[
            'form-control',
            inputClassname,
          ].join(' ')}
        />
        {hasAppend()}
      </div>
      {hasError()}
    </div>
  );
};

InputText.defaultProps = {
  placeholder: 'Browse a file...',
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  append: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  outerClassname: PropTypes.string,
  inputClassname: PropTypes.string,
};

export default InputFile;
