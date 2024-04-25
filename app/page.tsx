"use client"
import { HeroSlider } from '@/components/Home/HeroSlider'
import { ParentContainer } from '@/components/ParentContainer';
import React, { useEffect, useState } from 'react'
import { Product } from '@/components/template/Product';
import jsonData from "./jsonData.json";
import { TwoSideBanners } from '@/components/template/TwoSideBanners';
import { FullBanner } from '@/components/template/FullBanner';
import hi from "./hi.json";

const Page = () => {

    const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'en') {
        setJsonDataFile(jsonData);
      } else {
        setJsonDataFile(hi);
      }
    }, []);

    return (
        <>
            <HeroSlider slider={jsonDataFile.slider} />
            <ParentContainer>
                <Product title={jsonDataFile.related.title} products={jsonDataFile.related.products} listing_button={jsonDataFile.related.listing_button} />
                <TwoSideBanners banner={jsonDataFile.twobanner} />
                <Product title={jsonDataFile.trends.title} products={jsonDataFile.trends.products} listing_button={jsonDataFile.trends.listing_button} />
                <FullBanner banner={jsonDataFile.banner} />
                <Product title={jsonDataFile.devices.title} products={jsonDataFile.devices.products} listing_button={jsonDataFile.devices.listing_button} />
            </ParentContainer>
            <ParentContainer className='pb-[50px]'>
                <div className='pt-[30px]'>
                    <FullBanner banner={jsonDataFile.fullbanner} />
                </div>
                <Product title={jsonDataFile.devices.title} products={jsonDataFile.devices.products} listing_button={jsonDataFile.devices.listing_button} />
            </ParentContainer>

        </>
    )
}

export default Page