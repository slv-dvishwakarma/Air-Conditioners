import { HeroSlider } from '@/components/Home/HeroSlider'
import { ParentContainer } from '@/components/ParentContainer';
import React from 'react'
import { Product } from '@/components/template/Product';
import { ProductTemplate } from '@/components/template/Product/ProductTemplate';
import jsonData from "./jsonData.json";
import { TwoSideBanners } from '@/components/template/TwoSideBanners';
import { FullBanner } from '@/components/template/FullBanner';

const page = () => {

    return (
        <>
            <HeroSlider />
            <ParentContainer>
                <Product />
                <TwoSideBanners />
                <ProductTemplate title={jsonData.trends.title} products={jsonData.trends.products} listing_button={jsonData.trends.listing_button} />
                <FullBanner banner={jsonData.banner}/>
                <ProductTemplate title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>
            
            <ParentContainer className='pb-[50px]'>
                <div className='pt-[30px]'>
                <FullBanner banner={jsonData.fullbanner}/>
                </div>
                <ProductTemplate title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>

        </>
    )
}

export default page