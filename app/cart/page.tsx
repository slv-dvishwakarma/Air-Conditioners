import { ParentContainer } from '@/components/ParentContainer'
import React from 'react'
import { CartPage } from './CartPage'
import jsonData from "./jsonData.json"

const page = () => {
  return (
    <ParentContainer>
      <CartPage cartproduct={jsonData.productItems} cartpagedata={jsonData.cartpagedata} summery={jsonData.cartpagedata.summery} item={jsonData.cartpagedata.cartItemCount}/>
    </ParentContainer>
  )
}

export default page
