"use client"
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GridBox } from '@/components/GridBox';
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
        <GridBox columns={6} gap={5} className='grid'>
            <GridBox.GridItem columnMerge={1}>
                <div className="mt-4 space-y-4 ">
                    {images.map((image, index) => (

                        <Image
                            key={index}
                            className="cursor-pointer border border-gray-200 "
                            src={image}
                            alt={`Product ${index + 1}`}
                            width={500}
                            height={500}
                            onClick={() => handlePreviewClick(index)}
                        />
                    ))}
                </div>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={5}>
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
            </GridBox.GridItem>
        </GridBox>
    );
};
