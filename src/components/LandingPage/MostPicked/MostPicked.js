import React from 'react';
import Fade from 'react-reveal/Fade';

import './MostPicked.scss';
import Button from '../../UI/Button/Button';

const MostPicked = (props) => {
  return (
    <Fade bottom>
      <section
        className='container'
        ref={props.refMostPicked}
      >
        <h4 className='mb-3'>Most Picked</h4>
        <div className='container-grid'>
          {props.data.map((item, i) => (
            <div
              className={`item ${
                i === 0
                  ? 'column-12 row-2'
                  : 'column-4 row-1'
              }`}
              key={i}
            >
              <Fade bottom delay={300 * i}>
                <div className='card card-featured'>
                  <div className='tag'>
                    ${item.price}{' '}
                    <span className='font-weight-light'>
                      per {item.unit}
                    </span>
                  </div>
                  <figure className='img-wrapper'>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className='img-cover'
                    />
                  </figure>
                  <div className='meta-wrapper'>
                    <Button
                      type='link'
                      href={`/properties/${item._id}`}
                      className='stretched-link d-block text-white'
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
};

MostPicked.propTypes = {};

export default MostPicked;
