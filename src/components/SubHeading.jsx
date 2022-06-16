import React from 'react';
import {images} from '../constants'

const SubHeading = ({title}) => (
  <div className='mb-4'>
    <p className='p-cormorant'>{title}</p>
    <img src={images.bottle} alt='bottle' className='h-2 md:h-3' />
  </div>
);

export default SubHeading;
