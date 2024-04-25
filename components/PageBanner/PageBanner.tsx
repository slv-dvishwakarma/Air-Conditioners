import { ParentContainer } from '@/components/ParentContainer';
import React from 'react'



interface PageBannerProps {
  image: string;
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ image, title}) => {
  const backgroundImage = image ? `url(${image})` : 'none';
  return (
    <div className='banner bg-cover bg-no-repeat xl:py-[147px] lg:py-[79px] md:py-[72px] py-[34px]' style={{ backgroundImage: backgroundImage }}>
      <ParentContainer>
        <h1 className='xl:text-[50px] lg:text-[50px] md:text-[50px] text-[25px] text-[white] font-semibold'>{title}</h1>
    </ParentContainer>
    </div>
  )
}

export default PageBanner
