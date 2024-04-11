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
          <div className='bg-cover bg-no-repeat xl:py-[100px] lg:py-[50px] md:py-[50px] py-[50px] bg-left-top ' style={{ backgroundImage: `url(${item.image})` }}>
            <GridBox columns={3} desktop={3} laptop={3} tablet={2} className='px-[3%] sm:grid'>
              <GridBox.GridItem columnMerge={2} colMargeDesktop={2} colMargeLaptop={1} colMargeTablet={1}>
                <div></div>
              </GridBox.GridItem>
              <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={2} colMargeTablet={1}>
                <h3 className='xl:text-[60px] lg:text-[60px] md:text-[60px] text-[30px] font-medium leading-[60px]'>{item.title}</h3>
                <p className='text-xl text-black font-medium xl:leading-[60px] lg:leading-[60px] md:leading-[60px] leading-[30px] xl:pt-0 lg:pt-0 md:pt-0 pt-[20px]'>{item.label}</p>
                <div className='mt-[30px] mb-[30px]'>
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

