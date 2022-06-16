import React from 'react';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='section-padding central relative bg-gradient-to-br from-red-dk to-red-br'>
    <div className="my-8 mx-16 central">
        <img src={images.meadBottle} alt="about_bottle" className='h-[910px]'/>
    </div>
  </div>
);

export default AboutUs;
