import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BannerItem {
    name: string;
    image: string;
    image_width: number;
    image_height: number;
    link: string;
    column_merge: number;
}

interface BannersProps {
    banner?: BannerItem[]; 
    column?: number;
}

export const BannersTemplate: React.FC<BannersProps> = ({ banner, column }) => {
    const externalData: BannersProps | undefined = undefined; 

    const dataToUse = externalData ? externalData : { banner, column };

    return (
        <div className='banner pt-[20px]'>
            <div className={`sm:grid grid-cols-${dataToUse.column} gap-8`}>
                {dataToUse.banner?.map((item, index) => (
                    <div key={index} className={`grid-item xl:py-0 lg:py-0 md:py-0 py-3  col-span-${item.column_merge}`}>
                        <Link href={item.link}>
                            <Image className='rounded-[10px] w-full'
                                src={item.image}
                                alt={item.name}
                                width={item.image_width}
                                height={item.image_height}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
