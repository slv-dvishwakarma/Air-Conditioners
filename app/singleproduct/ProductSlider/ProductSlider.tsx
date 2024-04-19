"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface ProductSliderProps {
    images: string[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ images }) => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
    };

    const handlePreviewClick = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className='gap-5 xl:flex-row lg:flex-row md:flex-row flex-col-reverse flex'>
            <div className=' xl:w-[20%] lg:w-[20%] md:w-[20%] w-full' >
                <div className="mt-4 xl:space-y-4  lg:space-y-4 md:space-y-4 space-y-0 xl:block lg:block md:block flex gap-3 flex-wrap">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            className="cursor-pointer border border-gray-200 w-[100px]"
                            src={image}
                            alt={`Product ${index + 1}`}
                            width={500}
                            height={500}
                            onClick={() => handlePreviewClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div className=' xl:w-[80%] lg:w-[80%] md:w-[80%] w-full'>
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image
                            key={index}
                            src={image}
                            alt={`Product ${index + 1}`}
                            width={500}
                            height={500}
                        />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
