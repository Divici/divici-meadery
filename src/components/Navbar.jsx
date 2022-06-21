import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center bg-cream-md py-1 px-8'>
      <div className="flex justify-start items-center">
        <img src={images.divici} alt='logo' className='pt-4 w-[100px] md:w-[125px] lg:w-[150px] xl:w-[175px]'/>
      </div>
      <ul className='flex-1 hidden md:flex justify-end items-center'>
        <li className='p-opensans mx-4 hover:text-red-br'><a href='#home'>Home</a></li>
        <li className='p-opensans mx-4 hover:text-red-br'><a href='#about'>About</a></li>
        <li className='p-opensans mx-4 hover:text-red-br'><a href='#meads'>Meads</a></li>
        <li className='p-opensans mx-4 hover:text-red-br'><a href='#contact'>Contact</a></li>
      </ul>

      <div className="sm:flex md:hidden">
        <GiHamburgerMenu fontSize={27} onClick={()=> setToggleMenu(true)} className="cursor-pointer text-black hover:text-red-md" />

        {toggleMenu && (
          <div className='central slide-bottom fixed top-0 left-0 w-full h-screen bg-cream-md z-[5]'>
            <MdOutlineRestaurantMenu fontSize={27} className='text-red-md absolute top-5 right-5 cursor-pointer' onClick={() => setToggleMenu(false)} />
            <ul className='flex-1 flex justify-center flex-col items-center'>
              <li className='font-base text-center text-[2rem] m-8 hover:text-red-br'><a href='#home'>Home</a></li>
              <li className='font-base text-center text-[2rem] m-8 hover:text-red-br'><a href='#about'>About</a></li>
              <li className='font-base text-center text-[2rem] m-8 hover:text-red-br'><a href='#meads'>Meads</a></li>
              <li className='font-base text-center text-[2rem] m-8 hover:text-red-br'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )}
        
        
      </div>
    </nav>
  )
};

export default Navbar;
