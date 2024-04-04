import React from 'react'
import jsonData from "./jsonData.json";
import { HeaderTemplate } from './HeaderTemplate';

export const Header = () => {
  return (
    <HeaderTemplate logo={jsonData.logo} alt={jsonData.alt} cart={jsonData.cart} searchbar={jsonData.searchbar} option={jsonData.searchbar.option} language={jsonData.searchbar.language} options={jsonData.options}/>
  )
}
