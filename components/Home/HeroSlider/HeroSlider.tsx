"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css'
import { GridBox } from '@/components/GridBox';
import Link from 'next/link';

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


export const HeroSlider: React.FC<SliderProps> = ({ slider }) => {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dots: true
  };


  return (
    <Slider className="custom-slick-slider" {...settings}>
      {slider.map((item, index) => (
        <div key={index} className='hero-slider' >
          <div className='bg-cover bg-no-repeat py-[180px] bg-left-top' style={{ backgroundImage: `url(${item.image})` }}>
            <GridBox columns={3} className='px-[3%]'>
              <GridBox.GridItem columnMerge={2}>
                <div></div>
              </GridBox.GridItem>
              <GridBox.GridItem columnMerge={1}>
                <h3 className='text-[60px] font-medium leading-[60px]'>{item.title}</h3>
                <p className='text-xl text-black font-medium leading-[60px]'>{item.label}</p>
                <div className='mt-[30px]'>
                <Link className='bg-accentColor text-white px-[30px] py-3 rounded-[10px]' href={item.button_link}>{item.button_label}</Link>
                </div>
              </GridBox.GridItem>
            </GridBox>
          </div>
        </div>
      ))}
    </Slider>
  );
};

