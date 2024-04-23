import React from 'react'
import { ParentContainer } from '@/components/ParentContainer'
import { CheckoutTemplate } from './CheckoutTemplate'
import jsonData from "./jsonData.json";

const page = () => {
    return (
       
        <ParentContainer>
            <CheckoutTemplate checkout_form={jsonData.checkout_form} product={jsonData.product} total={jsonData.total} item={jsonData.item} button={jsonData.bank.button} bank={jsonData.bank.account}/>
        </ParentContainer>
    )
}

export default page
