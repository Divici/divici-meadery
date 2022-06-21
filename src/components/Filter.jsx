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
        <button onClick={() => setActive('All')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'All' ? 'bg-red-br' : 'bg-red-dk' }`}>All</button>
        <button onClick={() => setActive('acerglyn')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'acerglyn' ? 'bg-red-br' : 'bg-red-dk' }`}>Acerglyn</button>
        <button onClick={() => setActive('bochet')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'bochet' ? 'bg-red-br' : 'bg-red-dk' }`}>Bochet</button>
        <button onClick={() => setActive('cyser')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'cyser' ? 'bg-red-br' : 'bg-red-dk' }`}>Cyser</button>
        <button onClick={() => setActive('hydromel')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'hydromel' ? 'bg-red-br' : 'bg-red-dk' }`}>Hydromel</button>
        <button onClick={() => setActive('metheglin')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'metheglin' ? 'bg-red-br' : 'bg-red-dk' }`}>Metheglin</button>
        <button onClick={() => setActive('pyment')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'pyment' ? 'bg-red-br' : 'bg-red-dk' }`}>Pyment</button>
        <button onClick={() => setActive('sack')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'sack' ? 'bg-red-br' : 'bg-red-dk' }`}>Sack Mead</button>
        <button onClick={() => setActive('cocoa')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'cocoa' ? 'bg-red-br' : 'bg-red-dk' }`}>Cocoa Meads</button>
        <button onClick={() => setActive('melomel')} className={`custom-button text-white hover:bg-red-md m-2 ${active === 'melomel' ? 'bg-red-br' : 'bg-red-dk' }`}>Melomel</button>
    </div>
  )
}

export default Filter