import { Link } from 'react-router-dom';
import {images} from '../../constants'
import Wave from 'react-wavify';

const AboutUs = () => (
  <div className='bg-red-dk hexagon-bg'>
    <Wave fill='#f9f4e5'
      paused={false}
      options={{
        height: 10,
        amplitude: 20,
        speed: 0.17,
        points: 4
      }}
    className='rotate-180' />

    <div className='section-padding central relative bg-red-dk hexagon-bg'>
      <div className="absolute inset-0 central">
        <img src={images.D} alt="D_overlay" className='w-4/5 h-80 sm:w-80 md:w-[400px] md:h-[420px] z-0 opacity-25' />
      </div>

      <div className='central w-full z-[2] flex-col ml:flex-row'>
        <div className="flex-1 flex justify-end items-end flex-col text-right">
          <h1 className="font-base text-cream-br text-6xl leading-[83.2px] tracking-[0.04em] capitalize">About</h1>
          <img src={images.bottleC} alt="about_bottle" className="w-11" />
          <p className="p-opensans text-white my-8">I still remember my first mead, Hidden Legend Winery's The King's Mead. It quickly became my go to drink until my local store ran out of stock</p>
          <button type="button" className="custom-button bg-cream-br text-black">Learn More</button>
        </div>

        <div className="my-8 mx-16 central">
            <img src={images.meadBottle} alt="about_bottle" className='h-[500px] md:h-[650px] ml:h-[800px]'/>
        </div>

        <div className="flex-1 flex justify-start items-start flex-col text-left">
          <h1 className="font-base text-cream-br text-6xl leading-[83.2px] tracking-[0.04em] capitalize">History</h1>
          <img src={images.bottleC} alt="about_bottle" className="w-11 rotate-180" />
          <p className="p-opensans text-white my-8">I made my first meads in early 2020. I treated it like art and produced 2 of my best meads so far. Since then I have completed 10+ different meads with many more experiments on the way.</p>
          <Link to='/meads'><button type="button" className="custom-button bg-cream-br text-black">See More</button></Link>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
