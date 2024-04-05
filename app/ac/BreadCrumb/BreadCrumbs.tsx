import React from 'react'
import jsonData from "./jsonData.json";
import { BreadCrumbTemplate } from './BreadCrumbTemplate';

export const BreadCrumbs = () => {
  return (
    <BreadCrumbTemplate breadcrumb={jsonData.product.breadcrumb} brand={jsonData.product.brand} delivery={jsonData.product.delivery} compressor={jsonData.product.compressor} energy={jsonData.product.energy} coil={jsonData.product.coil} appliances={jsonData.product.appliances} price={jsonData.price} color={jsonData.color}/>
  )
}
