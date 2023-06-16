import React from 'react';
import ReactTyped from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
    return ( 
        <>
        <div className="main overflow-hidden">
            <div className="container mx-auto h-full grid-cols-1 grid xl:grid-cols-2 gap-4 flex justify-center items-center">
                <div className='text-center md:text-left' >
                    <h2 href="/#" className='md:mb-6 mb-3 inline-block md:text-4xl text-xl text-white rounded px-2 py-3 bg-fuchsia-900 bg-opacity-50 shadow-2xl'> Welcome to Our Galaxy</h2>
                    <h3 className='capitalize md:mt-3 md:mb-6 inline-block md:text-4xl text-xl text-white  bg-amber-900 bg-opacity-50 px-2 py-3 rounded shadow-2xl'>Hello Welcome To Our Galaxy It Contains Serveral Planets ,
                        <ReactTyped  className='font-bold text-gray-300'
                        strings={[" Earth Our PLanet where life has" ," Jupiter the largest in the Solar System"," Uranus  a gaseous cyan ice giant"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop
                        />
                    </h3>
                    <div className='mt-5'>
                        <a href="/#" className='inline-block text-white md:text-2xl  bg-fuchsia-900 bg-opacity-50 shadow-2xl p-3 rounded text-xl outline-gray-500 '>Let's Travel <FontAwesomeIcon icon={faArrowCircleRight}/></a>
                    </div>
                </div>
                <div className='animation relative md:block hidden'>
                    <div className="sun"></div>
                    
                    <div className="mercury-outline outline1 ">
                        <div className="mercury planet">
                            <p>Mercury</p>
                        </div>
                    </div>

                    <div className="venus-outline outline1">
                        <div className="venus planet">
                            <p>Venus</p>
                        </div>
                    </div>

                    <div className="earth-outline outline1">
                        <div className="earth planet outline1">
                                <div className="moon-outline outline1">
                                    <div className="moon  ">
                                        <p>Moon</p>
                                    </div>
                                </div>
                            <p>Earth</p>
                        </div>
                    </div>

                    <div className="mars-outline outline1">
                        <div className="mars planet">
                            <p>Mars</p>
                        </div>
                    </div>

                    <div className="jupiter-outline outline1">
                        <div className="jupiter planet">
                            <p>Jupiter</p>
                        </div>
                    </div>

                    <div className="saturn-outline outline1">
                        <div className="saturn planet">
                            <p>Saturn</p>
                        </div>
                    </div>

                    <div className="urans-outline outline1">
                        <div className="urans planet">
                            <p>Urans</p>
                        </div>
                    </div>


                    <div className="neptune-outline outline1">
                        <div className="neptune planet">
                            <p>Neptune</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Main;