import { HeroSlider } from '@/components/Home/HeroSlider'
import { ParentContainer } from '@/components/ParentContainer';
import { Banners } from '@/components/template/Banners';
import React from 'react'
import { Product } from '@/components/template/Product';
import { ProductTemplate } from '@/components/template/Product/ProductTemplate';
import { BannersTemplate } from '@/components/template/Banners/BannersTemplate';
import jsonData from "./jsonData.json";

const page = () => {

    return (
        <>
            <HeroSlider />
            <ParentContainer>
                <Product />
                <Banners />
                <ProductTemplate title={jsonData.trends.title} products={jsonData.trends.products} listing_button={jsonData.trends.listing_button} />
                <BannersTemplate banner={jsonData.product_banner.banner} column={jsonData.product_banner.column} />
                <ProductTemplate title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>
            <BannersTemplate banner={jsonData.product_banner1.banner} column={jsonData.product_banner1.column} />
            <ParentContainer className='pb-[50px]'>
                <div className='pt-[30px]'>
                    <BannersTemplate banner={jsonData.off_banner.banner} column={jsonData.off_banner.column} />
                </div>
                <ProductTemplate title={jsonData.devices.title} products={jsonData.devices.products} listing_button={jsonData.devices.listing_button} />
            </ParentContainer>

        </>
    )
}

export default page