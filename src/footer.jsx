import React from 'react';
import logo from "./imgs/get-started.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return ( 
    <>
    <div className="footer ">
        <div className="container mx-auto w-10/12">
            <div className="footer-info items-center flex flex-col md:flex-row justify-between md:justify-around bg-white shadow-2xl p-12 relative rounded-3xl">
                <p className='md:text-2xl font-bold text-lg '>See All World At Once & Leave Here Your Email</p>
                <div className='border border-yellow-400 rounded-xl p-4  mt-3 md:mt-0 ' >
                    <input type="email" placeholder='Email Addresse' className='inline-block bg-transparent focus:outline-none hover:outline-none'/>
                    <a href='/#' className='bg-yellow-400 px-4 py-2 rounded-xl text-white mt-4 md:mt-0 inline-block'>Submit</a>
                </div>
            </div>

            <div className="footer-desc flex justify-between pb-8 ">
                <h2 href="/#" className='md:text-4xl text-xl text-white '>
                    <a href="/#" className='inline-block transition ease-in-out hover:translate-x-1 hover:scale-110 block duration-300'>
                    <img src={logo} className="h-8 mr-3 inline-block" alt='here' />Galaxy 
                    </a>
                </h2>
                <div>
                    <ul className='flex justify-center md:justify-start '>
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
                    </ul>
                    <p className='text-gray-300 mt-5 text-center md:text-left'>&copy; 2022 <span>Sef Future</span> All Right Reserved</p>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Footer;