import React from 'react';
import { GridBox } from '../GridBox';
import Image from 'next/image';
import { Rating } from '../Rating';

interface ProductListItem {
    image: string;
    title: string;
    rank: number;
    rank_list: string;
    Price: number;
    discount_price: number;
    emi: string;
    service: string;
    delivery: string;
    currancy: string;
    mrp: string;
}

interface ProductListProps {
    product_list: ProductListItem[];
}

export const ProductListing: React.FC<ProductListProps> = ({ product_list }) => {
    return (
        <div>
            {product_list.map((item, index) => {
                const discountPercent = ((item.discount_price - item.Price) / item.discount_price) * 100;
                return (
                    <GridBox key={index} columns={4} gap={5} className='border-b-neutral-100 pt-0 pb-2.5 px-0 border-b border-solid xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6'>
                        <GridBox.GridItem columnMerge={1}>
                            <Image
                                className='rounded-[20px]'
                                src={item.image}
                                alt={item.title}
                                width={2000}
                                height={2000}
                            />
                        </GridBox.GridItem>
                        <GridBox.GridItem columnMerge={3} className='leading-[37px]'>
                            <h2 className='text-lg leading-6 hover:text-accentColor cursor-pointer'>{item.title}</h2>
                            <div className='rating'>
                                <Rating rating={item.rank} rank_list={item.rank_list}/>
                            </div>
                            <p className='space-y-2.5'>
                                <span className='text-[18px]'>{item.currancy}</span>
                                <span className='text-[28px]'>{item.Price}</span>
                                <span className='text-paragraph text-[14px]'> {item.mrp}</span>
                                <span className='text-paragraph text-[13px] line-through'> {item.discount_price}</span>
                                <span className='text-[14px] text-[#0F1111]'> ({discountPercent.toFixed(2)}% off)</span>
                            </p>
                            <p>
                                <span className='text-[#565959] text-[14px]'>{item.emi}</span>
                            </p>
                            <p>
                                <span className='text-[#565959] text-[14px]'>{item.delivery}</span>
                            </p>
                            <p>
                                <span className='text-[#565959] text-[14px]'>{item.service}</span>
                            </p>
                        </GridBox.GridItem>
                    </GridBox>
                );
            })}
        </div>
    );
};
