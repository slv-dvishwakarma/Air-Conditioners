"use client"
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import en from "./en.json"
import hi from "./hi.json"
import PageBanner from '@/components/PageBanner/PageBanner'
import { Form } from './Form'

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
    <PageBanner image={jsonDataFile.image} title={jsonDataFile.title}/>
    <ParentContainer>
      <Form title={jsonDataFile.enquiry.title} label={jsonDataFile.enquiry.label} enquiry_form={jsonDataFile.enquiry.enquiry_form} image={jsonDataFile.enquiry.image} button={jsonDataFile.enquiry.button}/>
    </ParentContainer>
    </>
  )
}

export default Page
