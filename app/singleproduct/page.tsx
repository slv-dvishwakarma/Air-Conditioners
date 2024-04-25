"use client"
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import { Single } from './Single'
import { Tab } from './Tab'
import jsonData from "./jsonData.json";
import hi from "./hi.json";
import { BreadCrumbs } from '../shop/BreadCrumb'

const Page = () => {

    const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'en') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === null) {
        setJsonDataFile(jsonData);
      } 
      else {
        setJsonDataFile(hi);
      }
    }, []);

    return (
        <ParentContainer>
            <BreadCrumbs breadcrumb={jsonDataFile.breadcrumb} />
            <Single images={jsonDataFile.productImages} title={jsonDataFile.description.title} rating={jsonDataFile.description.rank} rank_list={jsonDataFile.description.rank_list} Price={jsonDataFile.description.Price} discount_price={jsonDataFile.description.discount_price} emi={jsonDataFile.description.emi} service={jsonDataFile.description.service} delivery={jsonDataFile.description.delivery} currency={jsonDataFile.description.currency} mrp={jsonDataFile.description.mrp} label={jsonDataFile.description.label} button={jsonDataFile.description.button} quantity={jsonDataFile.quantity} wishlist={jsonDataFile.wishlist} Compare={jsonDataFile.Compare} size={jsonDataFile.size} size_chart={jsonDataFile.size_chart} chart_label={jsonDataFile.chart_label} size_guide={jsonDataFile.size_guide}/>
            <Tab products={jsonDataFile.products} tab={jsonDataFile.tab} title={jsonDataFile.description.title} label={jsonDataFile.description.label} size_chart={jsonDataFile.size_chart} chart_label={jsonDataFile.chart_label}/>
        </ParentContainer>
    )
}

export default Page