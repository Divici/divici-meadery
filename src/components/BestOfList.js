import react from "react";
import meads from "../data/meads";
import MeadQuick from "./MeadQuick";

const BestOfList = () => {
    return (
        <div className="best-meads">
            <div className='best-header'>
                <p>Check out some of my work</p>
                <h2>Best Finished Meads</h2>
            </div>

            <div>
                {
                    meads.map(mead => {
                        if (mead.info.name !== ''){
                            return (
                                <MeadQuick mead={mead} key={mead.id} />
                            )
                        }
                    })
                }

            </div>
        </div>
    )
} 

export default BestOfList;