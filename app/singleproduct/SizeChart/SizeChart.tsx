import React from 'react'
import { ChartTemplate } from './ChartTemplate'
import jsonData from "./jsonData.json";

export const SizeChart = () => {
  return (
    <ChartTemplate chart_label={jsonData.chart_label} size_chart={jsonData.size_chart}/>
  )
}
