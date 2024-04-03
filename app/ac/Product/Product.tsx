import React from 'react'
import { BreadCrumb } from '../BreadCrumb';
import { SideBar } from '../SideBar';
import { ProductListing } from '../ProductListing';
import { GridBox } from '@/components/GridBox';

interface ColorItem {
  label: string;
  name: string;
  options: string[];
}

interface PriceItem {
  range: number[];
  maxPrice: number;
  label: string;
}

interface ProductListItem {
  image: string;
  title: string;
  rank: number;
  rank_list: number;
  Price: number;
  discount_price: number;
  emi: string;
  service: string;
  delivery: string;
  currancy: string;
  mrp: string;
}

interface BreadCrumbItem {
  label: string;
  link: string;
}
interface BrandItem {
  label: string;
  name: string;
  options: string[];
}

interface ProductProps {
  breadcrumb: BreadCrumbItem[];
  brand: BrandItem;
  delivery: BrandItem;
  compressor:BrandItem;
  energy:BrandItem;
  coil:BrandItem;
  appliances: BrandItem;
  product_list: ProductListItem[];
  price: PriceItem;
  color: ColorItem;
}

export const Product: React.FC<ProductProps> = ({ breadcrumb, brand, delivery, compressor, energy, coil, appliances, product_list, price, color }) => {
  return (
    <div className='product-template'>
      <BreadCrumb breadcrumb={breadcrumb} brand={brand} delivery={delivery} compressor={compressor} energy={energy} coil={coil} appliances={appliances} price={price} color={color}/>
      <GridBox columns={12} gap={10} >
        <GridBox.GridItem columnMerge={3} className='xl:block lg:block md:hidden hidden'>
          <SideBar brand={brand} delivery={delivery} compressor={compressor} energy={energy} coil={coil} appliances={appliances} price={price} color={color}/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={9} colMargeTablet={12} colMargeDesktop={9} colMargeLaptop={9} className='pt-[20px]'>
          <ProductListing product_list={product_list}/>
        </GridBox.GridItem>
      </GridBox>
    </div>
  )
}
