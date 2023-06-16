import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Planets = () => {
    return ( 
        <>
            <div className="pb-2 bg-gray-900" id='Planets'>
               <div className="container text-center pt-3 mx-auto">
               <div className="line mb-5"></div>
                <h2 className='text-xl md:text-4xl mb-2 md:mb-5 font-bold main-title' data-text="Our Planets">Our Planets</h2>
                        <div className='py-5 '>
                            <ul className='text-center'>
                                <li className='inline-block'><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#c2410c" : "#fb923c" })} to="" className=" border md:text-2xl text-white md:px-4 md:py-2 py-1 px-2 text-lg rounded-l-full ">All Planets</NavLink></li>
                                <li className='inline-block'><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#c2410c" : "#fb923c" })} to="earth" className="border md:text-2xl text-lg text-white b py-1 px-2 md:px-4 md:py-2 ">Earth</NavLink></li>
                                <li className='inline-block'><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? "#c2410c" : "#fb923c" })} to="jupiter" className="border md:text-2xl text-lg text-white  py-1 px-2 md:px-4 md:py-2 rounded-r-full ">Mars</NavLink></li>
                            </ul>
                        </div>
                    <Outlet/>
                    <div className="line mb-5"></div>
               </div>
            </div>
        </>
     );
}
 
export default Planets;