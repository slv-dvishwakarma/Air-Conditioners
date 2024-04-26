"use client"
import { GridBox } from '@/components/GridBox'
import React, { useEffect, useState } from 'react'
import { EnquiryForm } from './EnquiryForm'
import { ParentContainer } from '@/components/ParentContainer'
import jsonData from "./jsonData.json"
import { SaleBanner } from './SaleBanner'
import Image from 'next/image'
import hi from "./hi.json";

const Page = () => {

    const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'en') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === null) {
        setJsonDataFile(jsonData);
      }
      else {
        setJsonDataFile(hi);
      }
    }, []);

    return (
        <>
            <SaleBanner banner={jsonDataFile.banner} />
            <ParentContainer>
                <GridBox columns={2} gap={10} className='sm:grid py-[50px] items-center'>
                    <GridBox.GridItem columnMerge={1}>
                        <Image src={jsonDataFile.enquiry.image} alt='sale' width={800} height={570} />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <EnquiryForm title={jsonDataFile.enquiry.title} label={jsonDataFile.enquiry.label} enquiry_form={jsonDataFile.enquiry.enquiry_form} button={jsonDataFile.enquiry.button}/>
                    </GridBox.GridItem>
                </GridBox>
            </ParentContainer>
        </>
    )
}

export default Page
