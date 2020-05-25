import React, { forwardRef } from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../../UI/Button/Button';

const MostPicked = (props) => {
  const SectionRef = forwardRef((props, ref) => (
    <section
      className='container most-picked'
      ref={ref}
    >
      {props.children}
    </section>
  ));

  const isFirstItem = (index) => {
    if (index === 0) {
      return 'column-12 row-2';
    } else {
      return 'column-4 row-1';
    }
  };

  let pickedItems = props.data.map((item, i) => (
    <div className={`item ${isFirstItem(i)}`} key={i}>
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
              src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
              alt={item.title}
              className='img-cover'
            />
          </figure>
          <div className='meta-wrapper'>
            <Button
              type='link'
              href={`/properties/${item._id}`}
              className='stretched-link d-block text-white'
            >
              <h5>{item.title}</h5>
            </Button>
            <span>
              {item.city}, {item.country}
            </span>
          </div>
        </div>
      </Fade>
    </div>
  ));

  return (
    <Fade bottom>
      <SectionRef ref={props.refMostPicked}>
        <h4 className='mb-3'>Most Picked</h4>
        <div className='container-grid'>
          {pickedItems}
        </div>
      </SectionRef>
    </Fade>
  );
};

export default MostPicked;
