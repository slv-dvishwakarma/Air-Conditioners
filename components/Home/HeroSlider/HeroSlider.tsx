"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface SliderItem {
    image: string;
    title: string;
    label: string;
    button_label: string;
    button_link: string;
}

interface SliderProps {
    slider: SliderItem[];
}

export const HeroSlider: React.FC<SliderProps> = ({ slider}) => {

    var settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      };

  return (
    <Slider className="custom-slick-slider" {...settings}>
      {slider.map((item, index) => ( 
        <div key={index} className={`bg-[url(${item.image})]`}>
          <div>
          </div>
        </div>
       ))} 
    </Slider>
  )
}
