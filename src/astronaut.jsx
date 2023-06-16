import React from 'react';
import img01 from "./imgs/spaceman-avatar-vector-logo_739653-11.avif"
import img02 from "../src/imgs/cute.avif"
const Astronaut = () => {
    return ( 
        <>
        <div className="astronaut md:py-28 py-14">
            <div className="container mx-auto">
  
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className=" box1-one  ">
                        <div className=" flex justify-center justify-items-center">
                            <div className="image w-24 h-24 ">
                                <img src={img01} className="rounded-full" alt="Avatar 01"/>
                            </div>
                            <div className="info self-center ml-3 md:ml-5  text-gray-200">
                                <h3  className='text-2xl'>Astronaut</h3>
                                <span className='text-gray-400'>The Administrator</span>
                            </div>
                        </div>
                        <p className='md:px-6 px-3 mt-3 text-gray-400 text-center md:text-left'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
                    </div>   

                    <div className=" box1-one mt-8 md:mt-0 ">
                        <div className=" flex justify-center justify-items-center">
                            <div className="image w-24 h-24 ">
                                <img src={img02} className="rounded-full" alt="Avatar 01"/>
                            </div>
                            <div className="info self-center ml-3 md:ml-5  text-gray-200">
                                <h3 className='text-2xl'>Astronaut</h3>
                                <span className='text-gray-400'>Manager</span>
                            </div>
                        </div>
                        <p className='md:px-6 px-3  mt-3 text-gray-400 text-center md:text-left'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
                    </div>        

                </div>
                
            </div>
        </div>
        </>
     );
}
 
export default Astronaut;