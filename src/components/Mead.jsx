import React from 'react'

const Mead = ({mead}) => {
  return (
    <div className='m-4 w-[300px] relative'>
        <div className='h-56 w-full bg-gradient-to-r from-cream-br via-cream-dk to-cream-br absolute bottom-0 -z-10 rounded-xl'></div>
        <div className='h-80 flex items-center justify-between'>
            <img src={mead.image} alt='mead' className='p-2 h-full'/>
            <div className='px-8'>
                <h2 className='font-alt font-medium tracking-[0.04em] text-base lg:text-lg xl:text-3xl'>{mead.info.name}</h2>
                <p className='capitalize mt-2'>{mead.info.type[0]}</p>
            </div>
        </div>
    </div>
  )
}

export default Mead