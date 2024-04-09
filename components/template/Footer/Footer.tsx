import React from 'react'
import { FooterTemplate } from './FooterTemplate'
import jsonData from "./jsonData.json";

export const Footer = () => {
  return (
    <FooterTemplate logo={jsonData.logo} alt={jsonData.alt} footer_item={jsonData.footer_item} copyright={jsonData.copyright} contact={jsonData.contact}/>
  )
}
