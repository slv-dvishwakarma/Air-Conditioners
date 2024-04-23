import { GridBox } from '@/components/GridBox'
import { ParentContainer } from '@/components/ParentContainer'
import Link from 'next/link'
import React from 'react'

interface BannerItem {
    image: string;
    title: string;
    label: string;
    booking_label: string;
    book_button: string;
    book_url: string;
}

interface BannerProps {
    banner: BannerItem;
}

export const SaleBanner: React.FC<BannerProps> = ({ banner})  => {
    const backgroundImage = banner.image ? `url(${banner.image})` : 'none';

  return (
    <div className="sale bg-cover bg-no-repeat py-[149px]" style={{ backgroundImage: backgroundImage }}>
                <ParentContainer>
                    <GridBox columns={2} gap={10} className='sm:grid'>
                        <GridBox.GridItem columnMerge={1} className='space-y-12'>
                            <h1 className='text-[50px] text-[white] leading-[0]'>{banner.title}</h1>
                            <p className='text-xl text-[white] leading-[0]'>{banner.label}</p>
                            <p className='font-semibold text-xl text-[white] leading-[0] text-accentColor'>{banner.booking_label}</p>
                            <div>
                                <Link href={banner.book_url} className='w-full text-center bg-accentColor rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700'>{banner.book_button}</Link>
                            </div>
                        </GridBox.GridItem>
                    </GridBox>
                </ParentContainer>
            </div>
  )
}
