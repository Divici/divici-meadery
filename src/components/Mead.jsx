import { useParams } from 'react-router-dom';
import data from '../constants/data';

const Mead = () => {
    const meadList = data.meads;
    const {name} = useParams();
    const mead = meadList.filter(mead=> mead.info.name === name.split('-').join(' '))
    
    return (
        <div className=''>
            <div className=" text-center">
                <h1 className="font-base text-center py-8 text-2xl font-bold uppercase shadow-md">{mead[0].info.name}</h1>            
            </div>

        </div>
    )
}

export default Mead