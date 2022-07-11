import { useParams } from 'react-router-dom';
import data from '../constants/data';
import { images } from '../constants';
import { m } from 'framer-motion';

const Mead = () => {
    const meadList = data.meads;
    const {name} = useParams();
    const mead = meadList.filter(mead=> mead.info.name === name.split('-').join(' '))
    let place = ''
    switch(mead[0].info.award) {
        case 1:
          place = '1st'
          break;
        case 2:
          place = '2nd'
          break;
        default:
          place = '3rd';
      }

    return (
        <div className='border-double border-b-8 border-cream-md mb-24 ml:mb-32'>
            <div className="py-8 shadow-sm flex justify-center">
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-6 mr-8 md:mr-12 lg:mr-16 rotate-180' />
                <div className='text-center'>
                    <h1 className="font-base text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-red-dk">{mead[0].info.name}</h1>
                    <p className='font-base text-lg md:text-xl lg:text-2xl capitalize'>{mead[0].info.type[0]} Mead</p>   
                </div>  
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-6 ml-8 md:ml-12 lg:ml-16' />    
            </div>

            <section className="w-10/12 md:w-4/5 lg:w-3/5 mx-auto mt-4 block md:flex md:flex-row hexagon-bg-br mb-4">
                    
                    {/* ==================Left Content======================= */}
                    <div className="pt-4 md:w-1/3 md:h-screen md:sticky md:top-0 relative mb-4 md:mb-0">
                        <div className="mx-auto overflow-x-auto">
                            <div className="flex flex-wrap justify-center">
                                <img src={mead[0].image} alt='mead bottle' className='my-10 h-80 md:h-[400px] ml:h-[500px] lg:h-[600px] '/>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* ==================Right Content======================= */}
                    <div className="pb-4 pt-2 md:pt-16 ml:pt-24 lg:pt-32 md:w-8/12 font-alt bg-gradient-to-b md:bg-gradient-to-r from-white/0 to-cream-md/75 rounded-xl p-2">
                        <p className='w-full md:w-4/5 mx-auto px-2 py-4 border-double border-b-8 border-cream-dk font-medium md:font-normal text-center md:text-left'>{mead[0].info.description}</p>

                        <div className='mt-4 mb-6 md:mb-12 flex justify-between flex-wrap w-full md:w-4/5 mx-auto text-center md:text-left'>
                            <div className='my-2 w-full font-alt'>
                                <h4 className='text-xs text-red-md'>Honey Varietals</h4>
                                <p className='font-semibold'>{mead[0].info.honey.join(', ')}</p>
                            </div>

                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Batch Size</h4>
                                <p className='font-semibold'>{mead[0].info.size}</p>
                            </div>
                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Alc.</h4>
                                <p className='font-semibold'>{mead[0].info.ABV}</p>
                            </div>

                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Primary SG</h4>
                                <p className='font-semibold'>{mead[0].primary.gravityStart.toFixed(3)}</p>
                            </div>
                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Bottled FG</h4>
                                <p className='font-semibold'>{mead[0].primary.gravityEnd.toFixed(3)}</p>
                            </div>

                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Start Date</h4>
                                <p className='font-semibold'>{mead[0].primary.start}</p>
                            </div>
                            <div className='my-2 w-2/5'>
                                <h4 className='text-xs text-red-md'>Bottle Date</h4>
                                <p className='font-semibold'>{mead[0].aging.date}</p>
                            </div>
                        </div>
                        {mead[0].info.award && 
                            <div className='relative w-full flex justify-center items-center'>
                                <img src={images.ribbon} alt='ribbon' className=' w-full h-[125px] md:h-[125px]' />
                                <div className='absolute w-2/3 flex justify-evenly z-10 pb-6'>
                                    <p className='font-base text-center text-3xl w-1/3 text-white'>{place} Place</p>
                                    <div className='flex flex-col justify-center'>
                                        <p className='font-alt text-sm text-center text-white'>{mead[0].info.competition}</p>
                                        <p className='font-alt text-xs text-center text-white'>{mead[0].info.compCategory}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    
                </section>

        </div>
    )
}

export default Mead