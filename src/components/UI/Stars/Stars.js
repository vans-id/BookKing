import React from 'react';
import PropTypes from 'prop-types';

import './Stars.scss';

const Stars = ({
  className,
  value,
  height,
  width,
  spacing,
}) => {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;

  // Full Star Loop
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos += width;
    star.push(
      <div
        className='star'
        key={`star-${i}`}
        style={{
          left: i * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  // Half Star Loop
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className='star'
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          width: decimals * width + spacing,
          height: height,
        }}
      ></div>
    );
  }

  const starHolder = [];
  for (let i = 0; i < 5; i++) {
    starHolder.push(
      <div
        className='star placeholder'
        key={`starPlaceholder-${i}`}
        style={{
          left: i * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={['stars', className].join(' ')}
        style={{ height: height }}
      >
        {starHolder}
        {star}
      </div>
    </>
  );
};

Stars.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number,
};

export default Stars;
