import React from 'react'
import { FooterTemplate } from './FooterTemplate'
import jsonData from "./jsonData.json";

export const Footer = () => {
  return (
    <FooterTemplate logo={jsonData.logo} alt={jsonData.alt} know={jsonData.know} footer_item={jsonData.footer_item} copyright={jsonData.copyright} language={jsonData.searchbar.language} />
  )
}
