import React from 'react'
import { ProductTemplate } from './ProductTemplate'
import jsonData from "./jsonData.json";

export const Product = () => {
  return (
    <ProductTemplate title={jsonData.title} products={jsonData.products} listing_button={jsonData.listing_button}/>
  )
}
