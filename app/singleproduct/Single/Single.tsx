import { GridBox } from '@/components/GridBox'
import React from 'react'
import { ProductSlider } from '../ProductSlider'
import { ProductDescription } from '../ProductDescription';

interface FunctionItem {
  label: string;
}

interface SizeItem {
  size: string;
  ton: string;
}


interface QuantityItem {
  id: string,
  defaultvalue: number
  name: string,
}

interface SingleProps {
  images: string[];
  title: string;
  rating: number;
  rank_list: number;
  Price: number;
  discount_price: number;
  emi: string;
  service: string;
  delivery: string;
  currency: string;
  mrp: string;
  label?: string[];
  button: string;
  quantity: QuantityItem;
  wishlist: FunctionItem;
  Compare: FunctionItem;
  size: FunctionItem;
  chart_label: string[];
  size_chart: SizeItem[];
}

export const Single: React.FC<SingleProps> = ({ images, title, rating, rank_list, Price, discount_price, emi, service, delivery, currency, mrp, label, quantity, button, Compare, wishlist, size, chart_label, size_chart  }) => {

  return (
    <>
    <GridBox columns={2} gap={10} className='sm:grid py-10 border-b-[#BBBFBF] border-b border-solid xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4'>
      <GridBox.GridItem columnMerge={1}>
        <ProductSlider images={images}/>
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={1}>
          <ProductDescription title={title} rank_list={rank_list} rating={rating} Price={Price} discount_price={discount_price} emi={emi} service={service} delivery={delivery} currency={currency} mrp={mrp} label={label} button={button} quantity={quantity} Compare={Compare} wishlist={wishlist} size={size} size_chart={size_chart} chart_label={chart_label}/>
      </GridBox.GridItem>
    </GridBox>
    </>
  )
}
