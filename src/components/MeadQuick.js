import react from "react";

const MeadQuick = (props) => {
    const {mead} = props;

    return (
        <div className='quick-info flex'>
          <div className='info'>
            <h3>{mead.info.name}</h3>
            <h4>Decadent and Bold</h4>
            <p>{mead.info.description}</p>
            <button>Details</button>
          </div>

          <div className='mead-img'>
            <img src={mead.image} alt='bottle of mead'></img>
          </div>
        </div>
    )
} 

export default MeadQuick;