import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import './Index.scss';

const Numbering = ({
  style,
  className,
  data,
  current,
}) => {
  const keysOfData = Object.keys(data);

  let steps = keysOfData.map((list, i) => {
    let isActive = '';

    if (list === current) {
      isActive = 'active';
    }
    if (i + 1 === keysOfData.length) {
      isActive = '';
      return null;
    }

    return (
      <li
        key={`list-${i}`}
        className={isActive.join(' ')}
      >
        {i + 1}
      </li>
    );
  });

  return (
    <Fade>
      <ol
        className={['stepper', className].join(' ')}
        style={style}
      >
        {steps}
      </ol>
    </Fade>
  );
};

Numbering.propTypes = {
  className: PropTypes.string,
  current: PropTypes.string,
  data: PropTypes.object,
};

export default Numbering;
