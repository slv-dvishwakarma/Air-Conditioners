"use client"
import React, { useEffect, useState } from 'react'
import jsonData from "./jsonData.json";
import { HeaderTemplate } from './HeaderTemplate';
import hi from "./hi.json";

export const Header = () => {

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
    <HeaderTemplate logo={jsonDataFile.logo} alt={jsonDataFile.alt} cart={jsonDataFile.cart} searchbar={jsonDataFile.searchbar} option={jsonDataFile.searchbar.option} language={jsonDataFile.searchbar.language} options={jsonDataFile.options}/>
  )
}
