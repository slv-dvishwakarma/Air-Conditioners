import React from 'react';
import Image from 'next/image';
import { Rating } from '../Rating';
import { GridBox } from '@/components/GridBox';

interface ProductListItem {
    image: string;
    title: string;
    rank: number;
    rank_list: number;
    Price: number;
    discount_price: number;
    emi: string;
    service: string;
    delivery: string;
    currency: string;
    mrp: string;
}

interface ProductListProps {
    product_list: ProductListItem[];
}

export const ProductListingTemplate: React.FC<ProductListProps> = ({ product_list }) => {
    return (
        <GridBox columns={1}  className='pt-0 py-5 px-0 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-0 grid xl:grid-cols-[1fr] lg:grid-cols-[1fr] md:grid-cols-[1fr] grid-cols-[1fr_1fr] xl:gap-5 lg:gap-5 md:gap-5 gap-3'>
            {product_list.map((item, index) => {
                const discountPercent = ((item.discount_price - item.Price) / item.discount_price) * 100;
                return (
                    <GridBox.GridItem key={index} columnMerge={1} className='gap-3'>
                        <GridBox columns={4} gap={5} className='xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-7 sm:grid'>
                            <GridBox.GridItem columnMerge={1} >
                                <Image
                                    className='xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] rounded-[0px] xl:w-full lg:w-full md:w-full w-full xl:h-60 lg:h-60 md:h-60 h-[160px] object-cover'
                                    src={item.image}
                                    alt={item.title}
                                    width={2000}
                                    height={2000}
                                />
                            </GridBox.GridItem>
                            <GridBox.GridItem columnMerge={3} className='leading-[37px] '>
                                <h2 className='text-lg xl:leading-6 lg:leading-6 md:leading-6 leading-7 hover:text-accentColor cursor-pointer xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 line-clamp-2 xl:text-lg lg:text-lg md:text-lg text-[16px]'>{item.title}</h2>
                                <div className='rating xl:block lg:block md:block hidden'>
                                    <Rating rating={item.rank} rank_list={item.rank_list} />
                                </div>
                                <p className='space-y-2.5 flex items-center gap-[5px]'>
                                    <span className='xl:text-[18px] lg:text-[18px] md:text-[18px] text-[14px] relative -top-2 xl:text-black lg:text-black md:text-black text-accentColor' >{item.currency}</span>
                                    <span className='xl:text-[28px] lg:text-[28px] md:text-[28px] text-[16px] xl:text-black lg:text-black md:text-black text-accentColor'>{item.Price}</span>
                                    <span className='text-paragraph text-[14px]'> {item.mrp}</span>
                                    <span className='text-paragraph text-[13px] line-through'> {item.discount_price}</span>
                                    <span className='text-[14px] text-[#0F1111] xl:block lg:block md:block hidden'> ({discountPercent.toFixed(2)}% off)</span>
                                </p>
                                <p>
                                    <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{item.emi}</span>
                                </p>
                                <p>
                                    <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{item.delivery}</span>
                                </p>
                                <p>
                                    <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{item.service}</span>
                                </p>
                            </GridBox.GridItem>
                        </GridBox>
                    </GridBox.GridItem>
                );
            })}
        </GridBox>
    );
};
