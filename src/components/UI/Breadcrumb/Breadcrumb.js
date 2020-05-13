import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Breadcrumb = (props) => {
  const isLastItem = (index) => {
    return index === props.data.length - 1;
  };

  const renderLink = (condition, snap) => {
    if (condition) {
      return snap.pageTitle;
    } else {
      return (
        <Button type='link' href={snap.pageHref}>
          {snap.pageTitle}
        </Button>
      );
    }
  };

  let labels = props.data.map((item, i) => (
    <li
      key={`breadcrumb-${i}`}
      className={`breadcrumb-item ${
        isLastItem(i) ? 'active' : null
      }`}
    >
      {renderLink(isLastItem(i), item)}
    </li>
  ));

  return (
    <nav aria-label='breadcrumb'>
      <ol
        className={props.className
          .split(' ')
          .join(' ')}
      >
        {labels}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default Breadcrumb;
