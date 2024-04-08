import React from 'react'
import { TabTemplate } from './TabTemplate'
import jsonData from "./jsonData.json"
import { Product } from '@/components/template/Product'
import { ReviewForm } from '../ReviewForm'
import { SizeChart } from '../SizeChart'

export const Tab = () => {
    return (
        <TabTemplate tabLabels={jsonData.tab} tabContents={[<div className='xl:px-[50px] lg:px-[50px] md:px-[50px] px-[10px] py-[30px]'>
            <h2 className='xl:text-2xl lg:text-2xl md:text-2xl text-[20px] leading-8 text-accentColor'>{jsonData.descriptin.title}</h2>
            <ul className='text-[15px] space-y-3 pt-3'>
                {jsonData.descriptin.label?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul></div>, <Product />, <ReviewForm />, <SizeChart />]} />
    )
}
