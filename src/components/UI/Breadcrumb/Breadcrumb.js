import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Breadcrumb = (props) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol
        className={props.className
          .split(' ')
          .join(' ')}
      >
        {props.data.map((item, i) => (
          <li
            key={`breadcrumb-${i}`}
            className={`breadcrumb-item ${
              i === props.data.length - 1
                ? 'active'
                : null
            }`}
          >
            {i === props.data.length - 1 ? (
              item.pageTitle
            ) : (
              <Button type='link' href={item.pageHref}>
                {item.pageTitle}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default Breadcrumb;
