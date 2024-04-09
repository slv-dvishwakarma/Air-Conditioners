"use client"
import Link from 'next/link';
import React from 'react';

interface ButtonItem {
    label: string;
    url: string;
}

interface BannerItem {
    label?: string;
    title: string;
    from?: string;
    price?: number;
    currency?: string;
    image: string;
    image_width: number;
    image_height: number;
    button?: ButtonItem[];
}

interface BannersProps {
    banner?: BannerItem;
}

export const FullBanner: React.FC<BannersProps> = ({ banner }) => {
    return (
        <div className='banner pt-[20px]'>
            <div className="sm:grid grid-cols-1 gap-8 items-center">
                <div className="grid-item xl:px-[80px] lg:px-[80px] md:px-8 xl:py-[55px] lg:py-[55px] md:py-8 px-5 py-5 rounded-[20px]  col-span-1" style={{ backgroundImage: `url(${banner?.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className='xl:w-[50%] lg:w-full md:w-full w-full'>
                        <h2 className='xl:text-[50px] lg:text-[35px] md:text-[25px] text-[25px] font-semibold text-primary text-balance'>{banner?.title}</h2>
                        <p className='xl:text-3xl lg:text-3xl md:text-xl text-xl font-medium xl:mt-[30px] lg:mt-[30px] md:mt-[15px] mt-[15px]'>{banner?.from} {banner?.currency}{banner?.price}</p>
                        <p className='xl:text-xl lg:text-xl md:text-xl text-sm font-medium xl:mt-[30px] lg:mt-[15px] md:mt-[15px] mt-[15px]'>{banner?.label}</p>
                        <div className='xl:pt-[50px] lg:pt-[20px] md:pt-[20px] pt-[20px] gap-5 flex'>
                            {banner?.button && banner.button.map((items, index) => (
                                <Link className={` px-[30px] py-3 rounded-[10px] text-center  border border-solid border-accentColor ${index === 0 ? 'bg-accentColor text-white hover:bg-[transparent] hover:text-accentColor' : 'text-accentColor hover:bg-accentColor hover:text-white'}`} key={index} href={items.url}>{items.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

