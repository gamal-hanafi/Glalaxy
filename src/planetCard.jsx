import React from 'react';
const PlanetCard = (props) => {
    const {name,desc} = props
    return ( 
    <>
        <div className="box">
            <div className="layer p-4">
                <h4 className='text-xl md:text-4xl mb-2 md:mb-5 font-bold text-white capitalize'>{name}</h4>
                <p className='text-gray-200 text-base md:text-xl mb-2 md:mb-5 capitalize '>{desc}</p>
            </div>
        </div>
    </> 
    );
}
 
export default PlanetCard;