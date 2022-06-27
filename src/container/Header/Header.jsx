import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import {images} from '../../constants';

const Header = () => (
  <div className='app-wrapper section-padding bg-cream-md' id='home'>
    <div className='flex-1 flex w-full justify-center items-start flex-col'>
      <SubHeading title="Distinguished Meads" />
      <h1 className='font-base text-red-md font-bold text-5xl leading-[70px] capitalize
        sm:text-[70px] sm:leading-[87px] tracking-[0.04em] 
        md:text-[90px] md:leading-[117px] 
        xl:text-[150px] xl:leading-[175px]'>
          Taste the nectar of the Gods
      </h1>
      <p className='p-opensans my-8'>Welcome to Divici's online mead resource. Here you will be able to find the wide range of experimental meads as well as refined meads I have created over the last few years. It is also just a place to track what I'm currently working on as well as leave some tips on how to recreate my recipes.</p>
      <Link to='/meads'><button type="button" className="custom-button bg-red-md text-white hover:bg-red-br">Explore Meads</button></Link>
    </div>

    <div className='ml-8 mt-20 lg:mt-0 flex-1 w-full flex justify-center items-center'>
      <img src={images.banner} alt='header' />
    </div>
    
  </div>
);

export default Header;
