import React from 'react'
import { SliderTemplate } from './SliderTemplate'
import jsonData from "./jsonData.json";

export const HeroSlider = () => {
  return (
    <SliderTemplate slider={jsonData} />
  )
}
