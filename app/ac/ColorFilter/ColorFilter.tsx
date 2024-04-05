import React from 'react'
import jsonData from "./jsonData.json";
import { ColorCheckBox } from './ColorCheckBox';

export const ColorFilter = () => {
  return (
    <ColorCheckBox id={jsonData.name} label={jsonData.label} option={jsonData.options} name={jsonData.name} />
  )
}
