"use client"
import { GridBox } from '@/components/GridBox'
import { ParentContainer } from '@/components/ParentContainer'
import React, { useEffect, useState } from 'react'
import en from "./json/en.json"
import hi from "./json/hi.json"
import { AccountMenu } from './AccountMenu'
import { Dashboard } from './Dashboard'

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
        <ParentContainer className='py-10'>
            <h1 className='font-semibold text-3xl text-center py-[30px] text-accentColor'>My Account</h1>
            <GridBox columns={4} gap={8} className='sm:grid'>
                <GridBox.GridItem columnMerge={1}>
                    <AccountMenu menu={jsonDataFile.menu} profile={jsonDataFile.profile} logout={jsonDataFile.logout} logout_data={jsonDataFile.logout_data}/>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={3}>
                <Dashboard />
                </GridBox.GridItem>
            </GridBox>
        </ParentContainer>
    )
}

export default Page
