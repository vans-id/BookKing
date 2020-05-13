import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

import './Header.scss';
import IconText from '../IconText/IconText';
import Button from '../../UI/Button/Button';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getNavLinkClass = (path) => {
    return props.location.pathname === path
      ? 'active'
      : '';
  };

  if (props.isCentered) {
    return (
      <Fade top>
        <header className='spacing-sm'>
          <div className='container'>
            <Navbar color='white' light expand='lg'>
              <Button
                className='brand-text-icon mx-auto'
                href='/'
                type='link'
              >
                <IconText />
              </Button>
            </Navbar>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade top>
      <header>
        <Navbar color='white' light expand='sm'>
          <div className='container'>
            <IconText />
            <NavbarToggler onClick={toggle} />

            <Collapse navbar isOpen={isOpen}>
              <Nav className='ml-auto' navbar>
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
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </header>
    </Fade>
  );
};

export default Header;
