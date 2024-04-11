import { HeroSlider } from '@/components/Home/HeroSlider'
import { ParentContainer } from '@/components/ParentContainer';
import React from 'react'
import { Product } from '@/components/template/Product';
import jsonData from "./jsonData.json";
import { TwoSideBanners } from '@/components/template/TwoSideBanners';
import { FullBanner } from '@/components/template/FullBanner';

const page = () => {

    return (
        <>
            <HeroSlider slider={jsonData.slider} />
            <ParentContainer>
                <Product title={jsonData.related.title} products={jsonData.related.products} listing_button={jsonData.related.listing_button} />
                <TwoSideBanners banner={jsonData.twobanner} />
                <Product title={jsonData.trends.title} products={jsonData.trends.products} listing_button={jsonData.trends.listing_button} />
                <FullBanner banner={jsonData.banner} />
                <Product title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>
            <ParentContainer className='pb-[50px]'>
                <div className='pt-[30px]'>
                    <FullBanner banner={jsonData.fullbanner} />
                </div>
                <Product title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>

        </>
    )
}

export default page