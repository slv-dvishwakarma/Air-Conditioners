import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type ColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface BannerItem {
    name: string;
    image: string;
    image_width: number,
    image_height: number,
    link: string;
    column_merge: ColumnType;
}

interface BannersProps {
    banner: BannerItem[];
    column: ColumnType;
}

export const Banners: React.FC<BannersProps> = ({ banner, column }) => {
    return (
        <div className='banner pt-[20px]'>
            <GridBox columns={column} gap={8}>
                {banner.map((item, index) => (
                    <GridBox.GridItem columnMerge={item.column_merge} key={index}>
                        <Link href={item.link}>
                                <Image className='rounded-[10px] w-full'
                                    src={item.image}
                                    alt={item.name}
                                    width={item.image_width}
                                    height={item.image_height}
                                />
                        </Link>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    );
}
