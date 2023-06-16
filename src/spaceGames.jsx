import React from 'react';
import img0 from "../src/imgs/team-01.png"
import img1 from "../src/imgs/team-03.png"
import img2 from "../src/imgs/blog-03.jpg"

import {AiOutlineUser} from "react-icons/ai"
import{AiOutlineClockCircle} from"react-icons/ai"
import{FaRegComments,FaArrowRight} from"react-icons/fa"
const SpaceGames = () => {
    return ( 
        <>
            <div className="space-games bg-gray-900 md:py-24 py-12">
                <h2 className='text-center text-xl md:text-4xl mb-2 md:mb-5 font-bold main-title' data-text="Space Games">Space Games</h2>
                <div className="container grid md:grid-cols-3 grid-cols-1 mx-auto gap-4">

                    <div class="space-box space-box-one overflow-hidden md:p-10 p-12">
                        <div class="image ">
                            <img src={img0} alt="Blog "/>
                        </div>
                        <div >
                            <ul className='flex bg-gray my-5 justify-center items-center text-white bg-gray-500 rounded '>
                                <li className='border-r p-3 border-yellow-400'><AiOutlineUser className="inline-block text-xl text-yellow-400 mr-2"/>John Doe</li>
                                <li className='border-r p-3 border-yellow-400 text-center'><AiOutlineClockCircle className="inline-block text-xl text-yellow-400 mr-2"/>13 Dec</li>
                                <li className='ml-5 p-3'><FaRegComments className="inline-block text-xl text-yellow-400 mr-2"/>75</li>
                            </ul>
                            <h3 className='text-center md:mb-4 mb-3 font-bold text-xl text-white '>Strategy  Game</h3>
                            <p className='text-gray-300 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem voluptatem cum alias veritatis praesentium</p>
                            <a href="/#" className='mt-3 inline-block bg-yellow-400 py-2 px-4 text-white rounded hover:bg-yellow-600 duration-500'>Read More<FaArrowRight className='inline-block text-xl ml-3'/></a>
                        </div>
                    </div>

                    <div class="space-box space-box-two overflow-hidden p-10">
                        <div class="image ">
                            <img src={img1} alt="Blog "/>
                        </div>
                        <div >
                            <ul className='flex bg-gray my-5 justify-center items-center text-white bg-gray-500 rounded '>
                                <li className='border-r p-3 border-yellow-400'><AiOutlineUser className="inline-block text-xl text-yellow-400 mr-2"/>John Doe</li>
                                <li className='border-r p-3 border-yellow-400 text-center'><AiOutlineClockCircle className="inline-block text-xl text-yellow-400 mr-2"/>13 Dec</li>
                                <li className='ml-5 p-3'><FaRegComments className="inline-block text-xl text-yellow-400 mr-2"/>75</li>
                            </ul>
                            <h3 className='text-center md:mb-4 mb-3 font-bold text-xl text-white '>Strategy  Game</h3>
                            <p className='text-gray-300 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem voluptatem cum alias veritatis praesentium</p>
                            <a href="/#" className='mt-3 inline-block bg-yellow-400 py-2 px-4 text-white rounded hover:bg-yellow-600 duration-500'>Read More<FaArrowRight className='inline-block text-xl ml-3'/></a>
                        </div>
                    </div>

                    <div class="space-box space-box-three overflow-hidden p-10">
                        <div class="image ">
                            <img src={img2} alt="Blog"/>
                        </div>
                        <div >
                            <ul className='flex bg-gray my-5 justify-center items-center text-white bg-gray-500 rounded '>
                                <li className='border-r p-3 border-yellow-400'><AiOutlineUser className="inline-block text-xl text-yellow-400 mr-2"/>John Doe</li>
                                <li className='border-r p-3 border-yellow-400 text-center'><AiOutlineClockCircle className="inline-block text-xl text-yellow-400 mr-2"/>13 Dec</li>
                                <li className='ml-5 p-3'><FaRegComments className="inline-block text-xl text-yellow-400 mr-2"/>75</li>
                            </ul>
                            <h3 className='text-center md:mb-4 mb-3 font-bold text-xl text-white '>Strategy  Game</h3>
                            <p className='text-gray-300 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quidem voluptatem cum alias veritatis praesentium</p>
                            <a href="/#" className='mt-3 inline-block bg-yellow-400 py-2 px-4 text-white rounded hover:bg-yellow-600 duration-500'>Read More<FaArrowRight className='inline-block text-xl ml-3'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SpaceGames;