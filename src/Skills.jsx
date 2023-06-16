import React from 'react';
import Card from './card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./imgs/planet-01.png"
import img2 from "./imgs/planet-08.png"
import img3 from "./imgs/planet-02.png"
import img4 from "./imgs/planet-09.png"

// Next Arrow
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,width:"35px",height:"35px" ,background:"#facc15",right:"-10px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}
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
        style={{ ...style,width:"35px",height:"35px" ,background:"#facc15",left:"-10px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
const Skills = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
            <div  id="Galaxies" className="p-2 md:pt-8 bg-gray-900">
                <div className="container mx-auto  text-center bg-gray-900 pt-8 rounded">
                    <h2 className='text-xl md:text-4xl font-bold main-title' data-text="Galaxies">Galaxies</h2>
                    <Slider  className='p-5'      {...settings}>
                    <Card img={img1} name={"Milky Way"}/>
                    <Card img={img2} name={"Andromeda"}/>
                    <Card img={img3} name={"Black Eye"}/>
                    <Card img={img4} name={"Sombrero"}/>
                    </Slider>
                </div>
            </div>
        </>
     );
}
 
export default Skills;