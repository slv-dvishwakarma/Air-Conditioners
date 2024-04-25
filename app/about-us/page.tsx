"use client"
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import en from "./en.json"
import hi from "./hi.json"
import PageBanner from '@/components/PageBanner/PageBanner'
import { Overview } from './Overview'
import { Counter } from './Counter'

const Page = () => {
  const [jsonDataFile, setJsonDataFile] = useState<typeof en | typeof hi>(en);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(en);
    } else if (newLanguage === null) {
      setJsonDataFile(en);
    }  
    else if (newLanguage === null) {
      setJsonDataFile(en);
    } 
    else {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <>
    <PageBanner image={jsonDataFile.image} title={jsonDataFile.title}/>
    <ParentContainer>
      <Overview image={jsonDataFile.overview.image} title={jsonDataFile.overview.title} paragraph={jsonDataFile.overview.paragraph}/>
      <Counter label={jsonDataFile.label} counter={jsonDataFile.counter}/>
    </ParentContainer>
    </>
  )
}

export default Page
