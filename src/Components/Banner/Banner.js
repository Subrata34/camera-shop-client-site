import React from 'react';
import './Banner.css';
import image01 from '../Image/image01.jpg';

const Banner = () => {
  return (
      <div>
          <img className='banner-img' src={image01} alt="" />
      </div>
  );
};

export default Banner;
