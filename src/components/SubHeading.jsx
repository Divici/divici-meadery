import React from 'react';
import {images} from '../constants'

const SubHeading = () => (
  <div className='mb-4'>
    <p className='p-cormorant'>Title</p>
    <img src={images.spoon} alt='spoon' className='' />
  </div>
);

export default SubHeading;
