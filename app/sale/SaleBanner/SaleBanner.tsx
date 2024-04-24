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
    <div className="sale bg-cover bg-no-repeat xl:py-[147px] lg:py-[79px] md:py-[62px] py-[15px]" style={{ backgroundImage: backgroundImage }}>
                <ParentContainer>
                    <GridBox columns={2} gap={10} className='sm:grid items-center'>
                        <GridBox.GridItem columnMerge={1} className='xl:space-y-5 lg:space-y-8 md:space-y-6 space-y-5'>
                            <h1 className='xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] text-[white] xl:leading-[35px] lg:leading-[20px] md:leading-[5px] leading-[5px]'>{banner.title}</h1>
                            <p className='xl:text-xl lg:text-lg md:text-sm text-[12px] text-[white]  text-balance leading-[10px]'>{banner.label}</p>
                            <p className='font-semibold xl:text-xl lg:text-lg md:text-sm text-[12px] text-[white]  text-accentColor leading-[10px]'>{banner.booking_label}</p>
                            <div>
                                <Link href={banner.book_url} className='w-full text-center bg-accentColor rounded-xl xl:py-3 lg:py-3 md:py-3 py-2 xl:px-6 lg:px-6 md:px-6 px-3 font-semibold xl:text-lg lg:text-lg md:text-lg text-sm text-white transition-all duration-500 hover:bg-indigo-700'>{banner.book_button}</Link>
                            </div>
                        </GridBox.GridItem>
                    </GridBox>
                </ParentContainer>
            </div>
  )
}
