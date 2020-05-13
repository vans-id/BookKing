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
  return (
    <Fade>
      <ol
        className={['stepper', className].join(' ')}
        style={style}
      >
        {keysOfData.map((list, i) => {
          let isActive =
            list === current ? 'active' : '';

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
        })}
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
