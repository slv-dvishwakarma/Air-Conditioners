"use client"
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import { CartPage } from './CartPage'
import jsonData from "./jsonData.json"
import hi from "./hi.json";

const Page = () => {

  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(jsonData);
    }  else if (newLanguage === null) {
      setJsonDataFile(jsonData);
    }
    else {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <ParentContainer>
      <CartPage cartproduct={jsonDataFile.productItems} cartpagedata={jsonDataFile.cartpagedata} summery={jsonDataFile.cartpagedata.summery} item={jsonDataFile.cartpagedata.cartItemCount} static_item={jsonDataFile.fix_title}/>
    </ParentContainer>
  )
}

export default Page
