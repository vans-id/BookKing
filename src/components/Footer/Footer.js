import React from 'react';

import './Footer.scss';
import Button from '../UI/Button/Button';
import IconText from '../IconText/IconText';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-auto brand-footer'>
            <IconText />
            <p className='brand-tagline'>
              We kaboom your beauty holiday instantly
              and memorable
            </p>
          </div>

          <div className='col-lg-2 mr-5'>
            <h6 className='mt-2'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  New Account
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/properties'>
                  Start booking a room
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className='col-lg-2 mr-5'>
            <h6 className='mt-2'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/careers'>
                  Our Career
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/privacy'>
                  Privacy
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/term'>
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>

          <div className='col-lg-3'>
            <h6 className='mt-2'>Connect Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button
                  type='link'
                  isExternal
                  href='/mailto:support@stayseeker.id'
                >
                  support@stayseeker.id
                </Button>
              </li>
              <li className='list-group-item'>
                <Button
                  isExternal
                  type='link'
                  href='/tel:+622122081996'
                >
                  021-2208-1996
                </Button>
              </li>
              <li className='list-group-item'>
                <span>
                  Stayseeker, Kemang, Jakarta
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col-auto text-center copyrights'>
            Copyright 2020 • All right reserverd •
            Staycation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
