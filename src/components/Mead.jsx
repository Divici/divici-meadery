import { useParams } from 'react-router-dom';
import data from '../constants/data';
import { images } from '../constants';

const Mead = () => {
    const meadList = data.meads;
    const {name} = useParams();
    const mead = meadList.filter(mead=> mead.info.name === name.split('-').join(' '))
    console.log(mead);
    return (
        <div className=''>
            <div className="py-8 shadow-sm flex justify-center">
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-4 mr-8 rotate-180' />
                <div className='text-center'>
                    <h1 className="font-base text-2xl font-bold uppercase text-red-dk">{mead[0].info.name}</h1>
                    <p className='font-base text-lg capitalize'>{mead[0].info.ABV} {mead[0].info.type[0]} Mead</p>   
                </div>  
                <img src={images.bottle} alt='bottle' className='h-2 md:h-3 mt-4 ml-8' />    
            </div>

            <section className="w-10/12 md:w-4/5 xl:w-3/5 mx-auto mt-4 block md:flex md:flex-row hexagon-bg-br">
                    
                    {/* ==================Left Content======================= */}
                    <div className="pt-4 md:w-1/3 md:h-screen md:sticky md:top-0">
                        <div className="mx-auto overflow-x-auto">
                            <div className="flex flex-wrap justify-center">
                                <img src={mead[0].image} alt='mead bottle' className='my-10 h-80 md:h-[400px] ml:h-[450px] lg:h-[500px] '/>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* ==================Right Content======================= */}
                    <div className="p-4 md:w-8/12 text-lg">
                        
                        <h2 className="mb-2 w-3/4 text-4xl border-b-2">Directions</h2>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                        <p>{mead[0].info.description}</p>
                    </div>
                    
                </section>

        </div>
    )
}

export default Mead