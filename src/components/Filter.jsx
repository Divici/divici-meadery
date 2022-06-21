import { useEffect } from 'react'

const Filter = ({setActive, active, setFiltered, meadList}) => {

    useEffect(()=>{
        if(active === 'All'){
            setFiltered(meadList)
            return;
        }
        const filtered = meadList.filter(mead => mead.info.type.includes(active))
        setFiltered(filtered)
    }, [active])

  return (
    <div className='central flex-wrap my-4'>
        <button onClick={() => setActive('All')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>All</button>
        <button onClick={() => setActive('acerglyn')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Acerglyn</button>
        <button onClick={() => setActive('bochet')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Bochet</button>
        <button onClick={() => setActive('cyser')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Cyser</button>
        <button onClick={() => setActive('hydromel')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Hydromel</button>
        <button onClick={() => setActive('metheglin')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Metheglin</button>
        <button onClick={() => setActive('pyment')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Pyment</button>
        <button onClick={() => setActive('sack')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Sack Mead</button>
        <button onClick={() => setActive('cocoa')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Cocoa Meads</button>
        <button onClick={() => setActive('melomel')} className='custom-button bg-red-dk text-white hover:bg-red-md active:bg-red-br m-2'>Melomel</button>
    </div>
  )
}

export default Filter