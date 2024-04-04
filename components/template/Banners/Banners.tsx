import React from 'react'
import { BannersTemplate } from './BannersTemplate'
import jsonData from "./jsonData.json";

export const Banners = () => {
  return (
    <BannersTemplate banner={jsonData.banner} column={jsonData.column} />
  )
}
