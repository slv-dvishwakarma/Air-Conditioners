"use client"
import { Rating } from '@/app/ac/Rating';
import { GridBox } from '@/components/GridBox';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

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

export const ViewedProduct: React.FC<ViewedProps> = ({ title, products, listing_button }) => {

    const [showAllOptions, setShowAllOptions] = useState(false);

    return (
        <div className='viewed-items py-[50px]'>
            <div className='flex justify-between'>
                <label className='text-xl font-medium'>{title}</label>
                {products.length > 5 && (
                    <Link href={listing_button.link} className='text-sm text-accentColor cursor-pointer'>
                        {!showAllOptions && (<span className='flex items-center gap-2.5'>{listing_button.name}</span>)}
                    </Link>
                )}
            </div>
            <GridBox columns={5} gap={10} className='pt-2'>
                {(showAllOptions ? products : products.slice(0, 5)).map((item, index) => (
                    <GridBox.GridItem key={index} columnMerge={1}>
                        <Image className='border border-solid border-white rounded-[10px]'
                            src={item.image}
                            alt={item.name}
                            width={500}
                            height={500}
                        />
                        <div className='p-2'>
                            <div className='font-semibold text-lg'>
                                <h3 className='hover:text-accentColor cursor-pointer'>{item.company} <span className='font-normal text-base'>{item.name}</span></h3>
                            </div>
                            <Rating rating={item.rank} rank_list={item.rank_list} />
                            <span className='flex h-[35px]'>
                                <span>{item.currancy}</span>
                                <span className='text-[28px] font-medium'>{item.Price.toFixed(2)}</span>
                                {item.discount_price && <span className='text-paragraph text-[13px] line-through self-end ml-2.5'>{item.currancy} {item.discount_price.toFixed(2)}</span>}
                            </span>
                            <span className='text-paragraph text-[13px] mt-3'>{item.delivery}</span>
                        </div>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    )
}
