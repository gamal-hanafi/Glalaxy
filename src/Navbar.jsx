import React from 'react';
import { useState } from 'react';
import logo from "./imgs/get-started.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    const [color,Setcolor] = useState(false);
    const [toogle,Settoogle]= useState(false)
    const toggleClass=()=>{
        Settoogle(!toogle)
    }
    const colorchange=()=>{
        if(window.scrollY >=80 && color === false){
            Setcolor(true)
        }
        else if(window.scrollY < 80 && color===true){
            Setcolor(false)
        }
    }
    window.addEventListener("scroll",colorchange)
    return ( 
        <>
        
        <nav className={color ?  "z-10 bg-black bg-opacity-80  fixed top-0 left-0 right-0 duration-300" : "z-10   duration-300 md:bg-transparent bg-neutral-800 bg-opacity-50 fixed top-0 left-0 right-0"}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/#" className="flex items-center text-white bg-black bg-opacity-0 rounded transition ease-in-out hover:scale-110 block duration-300 p-3 ">
                <img  alt='here' src={logo} className="h-8 mr-3"/>
                <span className="self-center md:text-3xl text-xl font-semibold whitespace-nowrap ">Galaxy</span>
            </a>
            <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={toggleClass}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className={toogle?"w-full md:block md:w-auto text-center":"hidden w-full md:block md:w-auto"} >
            <ul className="font-medium flex justify-center items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
                <li>
                    <a href="/#" className={color ? "mb-2 link block md:text-lg text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0":"mb-2 link block md:text-xl text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0"} aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#Galaxies" className={color ? "mb-2 link block md:text-lg text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0 ":" mb-2 link block md:text-xl text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0"}>Galaxies</a>
                </li>
                <li>
                     <a href="#Planets"className={color ? "mb-2 link block md:text-lg text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0 ":"mb-2 link block md:text-xl text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0"}>Planets</a>
                </li>
                <li className='menu'>
                     <a href="#Galaxies"className={color ? "menu mb-2 link block md:text-lg text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0 ":"menu  mb-2 link block md:text-xl text-yellow-400 md:-rotate-[20deg] duration-500 relative hover:rotate-0"}>Other Galxies</a>
                     <div class="mega-menu p-3">
                            <ul>
                                <li><a href="/#" className='capitalize'>Mliky way</a></li>
                                <li><a href="/#" className='mt-3 md:mt-5'>Earth</a></li>
                                <li><a href="/#">Mars</a></li>
                                <li><a href="/#">Neptune</a></li>
                                <li><a href="/#">Jupiter</a></li>
                            </ul>
                            <ul>
                                <li><a href="/#">Andromeda</a></li>
                                <li><a href="/#" className='mt-3 md:mt-5'>Planet 1</a></li>
                                <li><a href="/#">Planet 2</a></li>
                                <li><a href="/#">Planet 3</a></li>
                                <li><a href="/#">Planet 4</a></li>
                            </ul>
                            <ul>
                                <li><a href="/#">Whirlpool </a></li>
                                <li><a href="/#" className='mt-3 md:mt-5'>Planet 1</a></li>
                                <li><a href="/#" >Planet 2</a></li>
                                <li><a href="/#">Planet 3</a></li>
                                <li><a href="/#">Planet 4</a></li>
                            </ul>
                            <div class="clear"></div>
                        </div>
                        
                </li>
                {/* Link */}
                <li>
                    <a href="https://www.linkedin.com/in/gamal-khattab-a665bb229/"  target="_blank" rel="noreferrer" className="inline-block link-anchor text-white hover:text-yellow-400 "> 
                        <FontAwesomeIcon icon={faLinkedinIn}  className="icons"/>
                    </a>
                </li>
                <li className='link-anchor1  '>
                    <a href="/#" className="inline-block link-anchor text-white hover:text-yellow-400"> 
                        <FontAwesomeIcon icon={faFacebookF}  className="icons"/>
                    </a>
                </li>
                <li className='link-anchor1'>
                    <a href="/#" className="inline-block link-anchor text-white hover:text-yellow-400 "> 
                        <FontAwesomeIcon icon={faInstagram}  className="icons"/>
                    </a>
                </li>
                <li>
                    <a href="/#" className="text-white block py-2 pl-3 pr-4  rounded  hover:text-fuchsia-900 link-connect mt-3">Let's Connect</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        </>
     );
}
 
export default Navbar;