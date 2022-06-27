import { useParams } from 'react-router-dom';
import data from '../constants/data';
import { images } from '../constants';

const Mead = () => {
    const meadList = data.meads;
    const {name} = useParams();
    const mead = meadList.filter(mead=> mead.info.name === name.split('-').join(' '))
    console.log(mead);
    return (
        <div className='border-double border-b-8 border-cream-md mb-24 ml:mb-32'>
            <div className="py-8 shadow-sm flex justify-center">
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-6 mr-8 md:mr-12 lg:mr-16 rotate-180' />
                <div className='text-center'>
                    <h1 className="font-base text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-red-dk">{mead[0].info.name}</h1>
                    <p className='font-base text-lg md:text-xl lg:text-2xl capitalize'>{mead[0].info.ABV} {mead[0].info.type[0]} Mead</p>   
                </div>  
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-6 ml-8 md:ml-12 lg:ml-16' />    
            </div>

            <section className="w-10/12 md:w-4/5 lg:w-3/5 mx-auto mt-4 block md:flex md:flex-row hexagon-bg-br mb-4">
                    
                    {/* ==================Left Content======================= */}
                    <div className="pt-4 md:w-1/3 md:h-screen md:sticky md:top-0">
                        <div className="mx-auto overflow-x-auto">
                            <div className="flex flex-wrap justify-center">
                                <img src={mead[0].image} alt='mead bottle' className='my-10 h-80 md:h-[400px] ml:h-[500px] lg:h-[600px] '/>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* ==================Right Content======================= */}
                    <div className="pb-4 pt-2 md:pt-4 md:w-8/12 font-alt">
                        
                        <p className='w-full md:w-4/5 mx-auto px-2 py-4 border-double border-b-8 border-cream-dk font-medium text-center md:text-left'>{mead[0].info.description}</p>
                        <h3 className='w-full md:w-4/5 mx-auto font-medium mb-10 mt-16 text-red-dk'>The Primary</h3>
                        <p className='w-full md:w-4/5 mx-auto px-2'>{mead[0].primary.details}</p>

                        <h3 className='w-full md:w-4/5 mx-auto font-medium mb-10 mt-16 text-red-dk'>The Secondary</h3>
                        <p className='w-full md:w-4/5 mx-auto px-2'>{mead[0].secondary.details}</p>
                    </div>
                    
                </section>

        </div>
    )
}

export default Mead