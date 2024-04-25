"use client"
import React, { useEffect, useState } from 'react'
import { ParentContainer } from '@/components/ParentContainer'
import { CheckoutTemplate } from './CheckoutTemplate'
import jsonData from "./jsonData.json";
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
       
        <ParentContainer>
            <CheckoutTemplate checkout_form={jsonDataFile.checkout_form} product={jsonDataFile.product} total={jsonDataFile.total} item={jsonDataFile.item} button={jsonDataFile.bank.button} bank={jsonDataFile.bank.account} static_item={jsonDataFile.static_content}/>
        </ParentContainer>
    )
}

export default Page
