import { GridBox } from '@/components/GridBox'
import React from 'react'
import { ProductSlider } from '../ProductSlider'
import { ProductDescription } from '../ProductDescription';
import jsonData from "./jsonData.json";

export const SingleProductTemplate = () => {

  return (
    <>
    <GridBox columns={2} gap={10} className='sm:grid py-10 border-b-[#BBBFBF] border-b border-solid xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4'>
      <GridBox.GridItem columnMerge={1}>
        <ProductSlider images={jsonData.productImages}/>
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={1}>
          <ProductDescription title={jsonData.descriptin.title} rank_list={jsonData.descriptin.rank_list} rating={jsonData.descriptin.rank} Price={jsonData.descriptin.Price} discount_price={jsonData.descriptin.discount_price} emi={jsonData.descriptin.emi} service={jsonData.descriptin.service} delivery={jsonData.descriptin.delivery} currency={jsonData.descriptin.currency} mrp={jsonData.descriptin.mrp} label={jsonData.descriptin.label} button={jsonData.descriptin.button} quantity={jsonData.quantity} Compare={jsonData.Compare} wishlist={jsonData.wishlist} size={jsonData.size}/>
      </GridBox.GridItem>
    </GridBox>
    </>
  )
}
