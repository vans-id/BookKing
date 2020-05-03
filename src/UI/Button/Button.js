import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
  const classes = [props.className];

  if (props.isPrimary) classes.push('btn-primary');
  if (props.isSmall) classes.push('btn-sm');
  if (props.isLarge) classes.push('btn-lg');
  if (props.isBlock) classes.push('btn-block');
  if (props.hasShadow) classes.push('btn-shadow');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) classes.push('disabled');

    return (
      <span
        className={classes.join(' ')}
        style={props.style}
      >
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={classes.join(' ')}
          style={props.style}
          target={
            props.target === '_blank' ? '_blank' : null
          }
          rel={
            props.target === '_blank'
              ? 'noopener noreferer'
              : null
          }
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={classes.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={classes.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  isExternal: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

export default Button;
