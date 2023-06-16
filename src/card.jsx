import React from 'react';
const Card = (props) => {
    const {img,name} = props
    return ( 
        <>
        <div className="max-w-sm rounded overflow-hidden mx-auto mb-3">
            <img className="w-full  md:h-48 h-40"  rounded src={img}  alt="Sunset in the mountains"/>
            <div className="md:px-6 md:py-4 px-3 py-2">
                <div className="font-bold text-xl text-white mb-2">{name}</div>
                <p className="text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
        </>
     );
}
 
export default Card;