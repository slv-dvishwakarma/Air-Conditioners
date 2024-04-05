import React from 'react'
import { PriceFilterTemplate } from './PriceFilterTemplate'
import jsonData from "./jsonData.json";

export const PriceFilter = () => {
  return (
    <PriceFilterTemplate defaultRange={jsonData.range} maxRange={jsonData.maxPrice} label={jsonData.label}/>
  )
}
