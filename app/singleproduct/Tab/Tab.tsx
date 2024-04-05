import React from 'react'
import { TabTemplate } from './TabTemplate'
import jsonData from "./jsonData.json"
import { Product } from '@/components/template/Product'
import { ReviewForm } from '../ReviewForm'

export const Tab = () => {
    return (
        <TabTemplate tabLabels={jsonData.tab} tabContents={[<div className='px-[50px] py-[30px]'>
            <h2 className='text-2xl leading-8 text-accentColor'>{jsonData.descriptin.title}</h2>
            <ul className='text-[15px] space-y-3 pt-3'>
                {jsonData.descriptin.label?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul></div>, <Product />, <span>Additional information</span>, <ReviewForm />, <span>About brand</span>]} />
    )
}
