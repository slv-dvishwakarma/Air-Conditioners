import React from 'react'
import { GridBox } from '../GridBox';
import Image from 'next/image';
import { Rating } from '../Rating';

interface ProductListItem {
    image: string;
    title: string;
    rank: number;
    rank_list: string;
    Price: string;
    discount_price: string;
    emi: string;
    service: string;
    delivery: string;
    currancy: string;
}

interface ProductListProps {
    list_1: ProductListItem;
}

export const ProductListing: React.FC<ProductListProps> = ({ list_1 }) => {
    return (
        <GridBox columns={4} gap={5}>
            <GridBox.GridItem columnMerge={1}>
                <Image
                    className='rounded-[20px]'
                    src={list_1.image}
                    alt={list_1.title}
                    width={2000}
                    height={2000}
                />
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={3} className='leading-[37px]'>
                <h2 className='text-lg leading-6 hover:text-hover cursor-pointer'>{list_1.title}</h2>
                <div className='rating'>
                    <Rating rating={list_1.rank} rank_list={list_1.rank_list}/>
                </div>
                <p>
                    <span className='text-[18px]'>{list_1.currancy}</span>
                    <span className='text-[28px]'>{list_1.Price}</span>
                </p>
                <p>
                    <span className='text-[#565959] text-[14px]'>{list_1.emi}</span>
                </p>
                <p>
                    <span className='text-[#565959] text-[14px]'>{list_1.delivery}</span>
                </p>
                <p>
                    <span className='text-[#565959] text-[14px]'>{list_1.service}</span>
                </p>
            </GridBox.GridItem>
        </GridBox>
    )
}
