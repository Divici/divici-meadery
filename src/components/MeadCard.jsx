import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {images} from '../constants';

const MeadCard = ({mead}) => {
  const navigate = useNavigate();

  const handleUrlAppend = (name) => {
    return name.split(' ').join('-')
  }

  const handleClick = () => {
    navigate(`/meads/${handleUrlAppend(mead.info.name)}`);
  }

  return (
    <motion.div 
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        layout 
        className='m-4 w-[300px] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] relative'
    >
        <div className='h-56 w-full absolute bottom-0 -z-10 rounded-xl bg-gradient-to-r from-cream-br/20 via-cream-md to-cream-br'></div>
        <div className='h-80 flex items-center justify-between'>
            <img src={mead.image} alt='mead' className='p-2 h-full cursor-pointer' onClick={handleClick}/>
            <div onClick={handleClick} className='px-8 cursor-pointer'>
                <h2 className='font-alt font-semibold tracking-[0.04em] text-base lg:text-lg xl:text-3xl'>{mead.info.name}</h2>
                <p className='capitalize mt-2'>{mead.info.type[0]}</p>
            </div>
            <img src={images.bottle} alt='bottle' className='h-5 absolute bottom-8 right-8 opacity-70 cursor-pointer' onClick={handleClick} />
        </div>
        {mead.info.award && 
          <img src={images[`award${mead.info.award}`]} alt='award' className='h-1/2 absolute top-12 left-0' />
        }
    </motion.div>
  )
}

export default MeadCard