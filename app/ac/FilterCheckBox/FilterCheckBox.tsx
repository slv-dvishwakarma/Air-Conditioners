import React from 'react'
import { FilterCheckBoxTemplate } from './FilterCheckBoxTemplate'
import jsonData from "./jsonData.json";

export const FilterCheckBox = () => {
  return (
    <FilterCheckBoxTemplate id={jsonData.name} label={jsonData.label} option={jsonData.options} name={jsonData.name}/>
  )
}
