import React from 'react';
import PropTypes from 'prop-types';
import IconText from './IconText';
import Button from '../UI/Button/Button';

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path
      ? 'active'
      : '';
  };

  return (
    <header>
      <nav className='navbar navbar-expand-md'>
        <div className='container'>
          <IconText />

          <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav ml-auto'>
              <li
                className={`nav-item ${getNavLinkClass(
                  '/'
                )}`}
              >
                <Button
                  className='nav-link'
                  type='link'
                  href='/'
                >
                  Home
                </Button>
              </li>
              <li
                className={`nav-item ${getNavLinkClass(
                  '/browse'
                )}`}
              >
                <Button
                  className='nav-link'
                  type='link'
                  href='/browse'
                >
                  Browse
                </Button>
              </li>
              <li
                className={`nav-item ${getNavLinkClass(
                  '/stories'
                )}`}
              >
                <Button
                  className='nav-link'
                  type='link'
                  href='/stories'
                >
                  Stories
                </Button>
              </li>
              <li
                className={`nav-item ${getNavLinkClass(
                  '/agents'
                )}`}
              >
                <Button
                  className='nav-link'
                  type='link'
                  href='/agents'
                >
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
