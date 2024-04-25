import { GridBox } from '@/components/GridBox'
import Image from 'next/image';
import React from 'react'

interface OverviewProps {
  image: string;
  title: string;
  paragraph: string;
}

export const Overview: React.FC<OverviewProps> = ({ image, title, paragraph }) => {
  return (
    <div className='py-[50px]'>
      <GridBox columns={2} gap={10} className='sm:grid items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
        <GridBox.GridItem columnMerge={1}>
          <Image src={image} alt={title} width={424} height={316} className='w-full rounded-[15px]'/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1}>
          <h2 className='xl:text-[40px] lg:text-[40px] md:text-[40px] text-[35px]  text-accentColor'>{title}</h2>
          <p className='text-lg pt-[10px]'>{paragraph}</p>
        </GridBox.GridItem>
      </GridBox>
    </div>
  )
}

