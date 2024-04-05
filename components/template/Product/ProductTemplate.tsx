import React from 'react';
import { Rating } from '@/app/ac/Rating';
import { GridBox } from '@/components/GridBox';
import Image from 'next/image';
import Link from 'next/link';

interface ListingItem {
    name: string;
    link: string;
}

interface ViewedItem {
    company: string;
    name: string;
    image: string;
    rank: number;
    rank_list: number;
    Price: number;
    discount_price?: number;
    delivery: string;
    currancy: string;
}

interface ViewedProps {
    title: string;
    products: ViewedItem[];
    listing_button: ListingItem;
}

export const ProductTemplate: React.FC<ViewedProps> = ({ title, products, listing_button }) => {
    const externalData: ViewedProps | undefined = undefined; 

    const dataToUse = externalData ? externalData : { title, products, listing_button };

    return (
        <div className='viewed-items py-[50px]'>
            <div className='flex justify-between items-center'>
                <label className='xl:text-xl lg:text-xl md:text-xl text-[17px] font-medium'>{dataToUse.title}</label>
                {dataToUse.products.length > 5 && (
                    <Link href={dataToUse.listing_button.link} className='xl:text-sm lg:text-sm md:text-sm text-[12px] text-accentColor cursor-pointer'>
                        <span className='flex items-center gap-2.5'>{dataToUse.listing_button.name}</span>
                    </Link>
                )}
            </div>
            <GridBox desktop={5} laptop={5} tablet={5} mobile={2}  className='pt-10 grid-cols-2 grid xl:gap-10 lg:gap-10 md:gap-10 gap-3'>
                {dataToUse.products.slice(0, 5).map((item, index) => (
                    <GridBox.GridItem key={index} columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={1}>
                        <Image className='border border-solid border-white bg-[#F7F8F8] contrast-50'
                            src={item.image}
                            alt={item.name}
                            width={500}
                            height={500}
                        />
                        <div className='p-2'>
                            <div className='font-semibold xl:text-lg lg:text-lg md:text-lg text-[16px]'>
                                <h3 className='hover:text-accentColor cursor-pointer xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 line-clamp-2'>{item.company} <span className='font-normal text-base'>{item.name}</span></h3>
                            </div>
                            <div className='xl:block md:block lg:block hidden'>
                            <Rating rating={item.rank} rank_list={item.rank_list} />
                            </div>
                            <span className='flex flex-wrap h-[35px] xl:text-black lg:text-black md:text-black text-accentColor'>
                                <span>{item.currancy}</span>
                                <span className='xl:text-[28px] lg:text-[28px] md:text-[16px] text-[16px] font-medium'>{item.Price.toFixed(2)}</span>
                                {item.discount_price && <span className='text-paragraph text-[13px] line-through self-end xl:ml-2.5 lg:ml-2.5 md:ml-0 ml-0'>{item.currancy} {item.discount_price.toFixed(2)}</span>}
                            </span>
                            <span className='text-paragraph text-[13px] mt-3 xl:block md:block lg:block hidden'>{item.delivery}</span>
                        </div>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    );
};
