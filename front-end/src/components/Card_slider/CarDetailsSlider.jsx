import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageSlider } from "../DummyData";
// import { useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,     
  responsive: [
    {
      breakpoint: 768, // Breakpoint for medium-sized devices (e.g., tablets)
      settings: {
        slidesToShow: 4, // Show 4 slides on larger screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Breakpoint for small-sized devices (e.g., mobile phones)
      settings: {
        slidesToShow: 1, // Show 1 slide on small screens
        slidesToScroll: 1,
      },
    },
  ],
};

const CardD = () => {
  return (
    <div className="h-[300px] md:h-[499px] mx-6 rounded shadow-2xl  ">
      <Slider {...settings}>
        {ImageSlider.map((item) => (
          <div
            key={item.id}
            className="w-full  md:space-x-4 "
          >
            <img
              src={item.slider}
              alt=""
              className=" w-full h-[300px] md:h-[499px] md:w-[98%] object-cover object-center rounded"
              // className=" md:w-[98%] md:h-[499px] object-cover  rounded-md overflow-hidden object-center mx-auto"
            />
          </div>
        ))}
      </Slider>
     
    </div>
  );
};

export default CardD;
