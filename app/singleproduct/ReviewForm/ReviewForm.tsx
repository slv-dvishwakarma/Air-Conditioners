import React, { useEffect, useState } from 'react'
import { ReviewFormTemplate } from './ReviewFormTemplate'
import jsonData from "./jsonData.json"
import hi from "./hi.json";

export const ReviewForm = () => {

  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(jsonData);
    } else {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <ReviewFormTemplate name={jsonDataFile.name} email={jsonDataFile.email} message={jsonDataFile.message} button={jsonDataFile.button} review={jsonDataFile.review} form={jsonDataFile.form}/>
  )
}
