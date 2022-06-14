import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center bg-cream py-1 px-8'>
      <div className="flex justify-start items-center">
        <img src={images.divici} alt='logo' className='sm:w-[100px] md:w-[175px] lg:w-[250px]'/>
      </div>
      <ul className='flex-1 sm:hidden lg:flex justify-center items-center'>
        <li className='p-opensans mx-4 hover:text-red-700'><a href='#home'>Home</a></li>
        <li className='p-opensans mx-4 hover:text-red-700'><a href='#about'>About</a></li>
        <li className='p-opensans mx-4 hover:text-red-700'><a href='#meads'>My Meads</a></li>
        <li className='p-opensans mx-4 hover:text-red-700'><a href='#awards'>Awards</a></li>
        <li className='p-opensans mx-4 hover:text-red-700'><a href='#contact'>Contact</a></li>
      </ul>
      <div className="flex items-center">
        <a href="#login" className='p-opensans sm:hidden md:flex mx-4 hover:text-red-700 border-b-2 border-b-transparent hover:border-b-red-700'>Login / Register</a>
      </div>

      <div className="sm:flex lg:hidden">
        <GiHamburgerMenu fontSize={27} onClick={()=> setToggleMenu(true)} className="cursor-pointer text-burgandy" />

        {toggleMenu && (
          <div className='central slide-bottom fixed top-0 left-0 w-full h-screen bg-cream transition ease-in-out duration-500 z-[5]'>
            <MdOutlineRestaurantMenu fontSize={27} className='text-burgandy absolute top-5 right-5 cursor-pointer' onClick={() => setToggleMenu(false)} />
            <ul className='flex-1 flex justify-center flex-col items-center'>
              <li className='font-base text-center text-[2rem] text-burgandy m-8 hover:text-red-700'><a href='#home'>Home</a></li>
              <li className='font-base text-center text-[2rem] text-burgandy m-8 hover:text-red-700'><a href='#about'>About</a></li>
              <li className='font-base text-center text-[2rem] text-burgandy m-8 hover:text-red-700'><a href='#meads'>My Meads</a></li>
              <li className='font-base text-center text-[2rem] text-burgandy m-8 hover:text-red-700'><a href='#awards'>Awards</a></li>
              <li className='font-base text-center text-[2rem] text-burgandy m-8 hover:text-red-700'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )}
        
        
      </div>
    </nav>
  )
};

export default Navbar;
