import React from 'react'
import { ReviewFormTemplate } from './ReviewFormTemplate'
import jsonData from "./jsonData.json"

export const ReviewForm = () => {
  return (
    <ReviewFormTemplate name={jsonData.name} email={jsonData.email} message={jsonData.message} button={jsonData.button} review={jsonData.review} form={jsonData.form}/>
  )
}
