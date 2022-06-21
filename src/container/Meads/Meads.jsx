import { useEffect, useState } from 'react';
import Mead from '../../components/Mead';

import data from '../../constants/data';

const Meads = () => {
  const meads = data.meads;
  const [meadList, setMeadList] = useState(meads)

  return (
    <div className=''>
      <h1 className='font-base text-center py-8 text-2xl font-bold uppercase shadow-md'>All Meads</h1>
      <div className='flex justify-center flex-wrap py-4'>
        {meadList.map(mead=>{
          return <Mead key={mead.id} mead={mead}/>
        })}
      </div>
    </div>
  )
}

export default Meads