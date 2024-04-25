"use client"
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import en from "./en.json"
import hi from "./hi.json"
import { Title } from '@/components/Title'
import { Article } from '@/components/Article'

const Page = () => {

  const [jsonDataFile, setJsonDataFile] = useState<typeof en | typeof hi>(en);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(en);
    } else if (newLanguage === null) {
      setJsonDataFile(en);
    }  
    else {
      setJsonDataFile(hi);
    }
  }, []);
  return (
    <>
      <Title title={jsonDataFile.title} /> 
      <ParentContainer>
        <Article article={jsonDataFile.content} /> 
      </ParentContainer>
    </>
  )
}

export default Page
