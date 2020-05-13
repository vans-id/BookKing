import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Fade from 'react-reveal/Fade';

const Description = ({ data }) => {
  let featuredIcons = data.features.map(
    (feature, i) => (
      <div
        className='col-6 col-md-3 mb-3'
        key={`feature-${i}`}
      >
        <img
          width='38'
          height='38'
          src={feature.imageUrl}
          alt={feature.name}
          className='d-block mb-2'
        />{' '}
        <span>{feature.qty}</span>{' '}
        <span className='text-gray-500 font-weight-lighter'>
          {feature.name}
        </span>
      </div>
    )
  );

  return (
    <main>
      <Fade bottom>
        <h4>About The Place</h4>
        <div className='font-weight-lighter text-gray-500 mt-2'>
          {ReactHtmlParser(data.description)}
        </div>
        <div className='row mt-4'>{featuredIcons}</div>
      </Fade>
    </main>
  );
};

export default Description;
