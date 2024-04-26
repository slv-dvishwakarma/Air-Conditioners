"use client"
import React, { useEffect, useState } from 'react'
import { FooterTemplate } from './FooterTemplate'
import jsonData from "./jsonData.json";
import hi from "./hi.json";

export const Footer = () => {
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
    <FooterTemplate logo={jsonDataFile.logo} alt={jsonDataFile.alt} footer_item={jsonDataFile.footer_item} copyright={jsonDataFile.copyright} contact={jsonDataFile.contact}/>
  )
}
