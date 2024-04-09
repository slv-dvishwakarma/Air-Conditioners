import React from 'react'
import { BannersTemplate } from './BannersTemplate'
import jsonData from "./jsonData.json";

export const TwoSideBanners = () => {
  return (
    <BannersTemplate banner={jsonData.banner}/>
  )
}
