import React from 'react';
import img0 from "./imgs/work-steps.png"
import img1 from "./imgs/man.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,width:"35px",height:"35px" ,background:"#facc15",right:"30px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={onClick}
      />
    );
  }

//   Pervios

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,width:"35px",height:"35px" ,background:"#facc15",left:"0px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
const GetTouch = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,

            }
          }]
      };
    return ( 
        <>
            <div className="getTouch pb-32 pt-16 bg-gray-900 ">
                <div className="container mx-auto ">
                    <div className="line md:mb-12 mb-6"></div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <Slider      {...settings} className="px-24 md:px-0">
                    <div className="img">
                        <img src={img0}  alt="Here" />
                    </div>
                    <div className="img">
                        <img src={img1} alt="-Here" />
                    </div>
                    </Slider>
                    <div className="info overflow-hidden ">
                        <h2 className='sec-title text-white'>Travel To Space</h2>
                        <form action="" method='get' className="field " >
                            <div className='md:mt-12 mt-5 flex justify-between flex-col md:flex-row p-4 md:p-0 '> 
                                <input type="text" name="fname" placeholder='First Name' className='p-4 focus:text-gray-800 text-gray-300 bg-transparent placeholder-white focus:placeholder-gray-400 rounded  border flex-auto border-white focus:bg-white duration-300 hover:outline-none focus:outline-none'/>
                                <input type="text" name='lname' placeholder='Last Name' className='md:ml-2 mt-2 md:mt-0 p-4 focus:text-gray-800 text-gray-300 bg-transparent placeholder-white focus:placeholder-gray-400 rounded  border flex-auto border-white focus:bg-white duration-300 hover:outline-none focus:outline-none' />
                            </div>
                            <div className=' md:mt-2 flex justify-between  flex-col md:flex-row px-4 md:px-0 '>
                                <input type="email" name="mail" placeholder='Email Address' className='p-4 focus:text-gray-800 text-gray-300 bg-transparent placeholder-white focus:placeholder-gray-400 rounded  border flex-auto border-white focus:bg-white duration-300 hover:outline-none focus:outline-none'/>
                                <input type="text" name="phone" placeholder='Phone No.' className='md:ml-2 mt-2 md:mt-0 p-4 focus:text-gray-800 text-gray-300 bg-transparent placeholder-white focus:placeholder-gray-400 rounded  border flex-auto border-white focus:bg-white duration-300 hover:outline-none focus:outline-none'/>
                            </div>
                            <div className='mt-2 p-4 md:p-0'>
                                <textarea style={{resize:"none"}} name="" placeholder='Message' id="Message" className='w-full h-32 p-4 focus:text-gray-800 text-gray-300 bg-transparent placeholder-white focus:placeholder-gray-400 rounded  border flex-auto border-white focus:bg-white duration-300 hover:outline-none focus:outline-none' >
                                </textarea>
                            </div>
                            <div className="text-center md:text-left"><input type="submit" value="Send" className='md:mt-12 mt-3 bg-yellow-400 text-white px-10 py-3 cursor-pointer hover:bg-yellow-300 duration-400' /></div>
                        </form>
                    </div>
                    </div>
                    <div className="line md:mt-12 mt-6"></div>
                </div>
            </div>
        </>
     );
}
 
export default GetTouch;