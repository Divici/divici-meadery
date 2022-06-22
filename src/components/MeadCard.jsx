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
        className='m-4 w-[300px] relative'
    >
        <div className='h-56 w-full bg-gradient-to-r from-cream-br via-cream-dk to-cream-br absolute bottom-0 -z-10 rounded-xl'></div>
        <div className='h-80 flex items-center justify-between'>
            <img src={mead.image} alt='mead' className='p-2 h-full cursor-pointer' onClick={handleClick}/>
            <div onClick={handleClick} className='px-8 cursor-pointer'>
                <h2 className='font-alt font-semibold tracking-[0.04em] text-base lg:text-lg xl:text-3xl'>{mead.info.name}</h2>
                <p className='capitalize mt-2'>{mead.info.type[0]}</p>
            </div>
            <img src={images.bottle} alt='bottle' className='h-5 absolute bottom-8 right-8 opacity-70 cursor-pointer' onClick={handleClick} />
        </div>
    </motion.div>
  )
}

export default MeadCard