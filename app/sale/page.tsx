import { GridBox } from '@/components/GridBox'
import React from 'react'
import { EnquiryForm } from './EnquiryForm'
import { ParentContainer } from '@/components/ParentContainer'
import jsonData from "./jsonData.json"
import { SaleBanner } from './SaleBanner'
import Image from 'next/image'

const page = () => {

    return (
        <>
            <SaleBanner banner={jsonData.banner} />
            <ParentContainer>
                <GridBox columns={2} gap={10} className='sm:grid py-[50px] items-center'>
                    <GridBox.GridItem columnMerge={1}>
                        <Image src={jsonData.enquiry.image} alt='sale' width={800} height={570} />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1}>
                        <EnquiryForm title={jsonData.enquiry.title} label={jsonData.enquiry.label} enquiry_form={jsonData.enquiry.enquiry_form}/>
                    </GridBox.GridItem>
                </GridBox>
            </ParentContainer>
        </>
    )
}

export default page
