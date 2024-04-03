import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'

export const Banners = () => {
    return (
        <div className='banner pt-[20px]'>
            <GridBox columns={3} gap={8}>
                <GridBox.GridItem columnMerge={2}>
                    <Image className='rounded-[10px] w-full'
                        src="/banner-1.jpg"
                        alt="banner-1"
                        width={683}
                        height={374}
                    />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <Image className='rounded-[10px] w-full'
                        src="/banner-2.jpg"
                        alt="banner-1"
                        width={332}
                        height={374}
                    />
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
