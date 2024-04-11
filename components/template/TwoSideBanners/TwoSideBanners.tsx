"use client"
import Link from 'next/link';
import React from 'react';

interface ButtonItem {
    label: string;
    url: string;
}

interface BannerItem {
    title: string;
    from: string;
    price: number;
    currency: string;
    image: string;
    image_width: number;
    image_height: number;
    column_merge: number;
    button: ButtonItem[];
}

interface BannersProps {
    banner?: BannerItem[]; 
}

export const TwoSideBanners: React.FC<BannersProps> = ({ banner }) => {
    return (
        <div className='banner pt-[20px]'>
            <div className="sm:grid grid-cols-3 xl:gap-8 lg:gap-8 md:gap-3 gap-8 items-center space-y-5 xl:space-y-0 lg:space-y-0 md:space-y-0">
                {banner?.map((item, index) => (
                    <div key={index} className={`grid-item xl:px-[30px] lg:px-[20px] md:px-[30px] xl:py-[95px] lg:py-[50px] md:py-[50px] px-5 py-5 rounded-[20px]  col-span-${item.column_merge}`} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div>
                            <h2 className='xl:text-[50px] lg:text-[25px] md:text-[25px] text-[25px] font-semibold text-accentColor text-balance'>{item.title}</h2>
                            <p className='xl:text-3xl lg:text-lg md:text-lg text-xl font-medium xl:mt-[30px] lg:mt-[10px] md:mt-[10px] mt-[10px]'>{item.from} {item.currency}{item.price}</p>
                            <div className='xl:pt-[50px] lg:pt-[20px] md:pt-[20px] pt-[20px] xl:gap-5 lg:gap-5 md:gap-2 flex'>
                                {item.button && item.button?.map((items, index) => (
                                    <Link className={` xl:px-[30px] lg:[30px] md:px-[6px] px-[15px] xl:py-3 lg:py-2 md:py-1 py-2 rounded-[10px] text-center  border border-solid border-accentColor xl:text-[15px] lg:text-[15px] md:text-sm text-sm ${index === 0 ? 'bg-accentColor text-white hover:bg-[transparent] hover:text-accentColor' : 'text-accentColor hover:bg-accentColor hover:text-white'}`} key={index} href={items.url}>{items.label}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

