import React from 'react';
import {images} from '../constants'

const SubHeading = () => (
  <div className='mb-4'>
    <p className='p-cormorant'>Title</p>
    <img src={images.bottle} alt='bottle' className='h-3' />
  </div>
);

export default SubHeading;
