import React from 'react'
import { ProductListingTemplate } from './ProductListingTemplate'
import jsonData from "./jsonData.json";

export const ProductListing = () => {
  return (
    <ProductListingTemplate product_list={jsonData}/>
  )
}
