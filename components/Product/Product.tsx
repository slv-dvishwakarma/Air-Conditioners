import React from 'react'
import { GridBox } from '../GridBox'
import { BreadCrumb } from '../BreadCrumb';
import { SideBar } from '../SideBar';
import { ProductListing } from '../ProductListing';

interface ProductListItem {
  image: string;
  title: string;
  rank: number;
  rank_list: string;
  Price: string;
  discount_price: string;
  emi: string;
  service: string;
  delivery: string;
  currancy: string;
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
  list_1: ProductListItem;
}

export const Product: React.FC<ProductProps> = ({ breadcrumb, brand, delivery, compressor, energy, coil, appliances, list_1 }) => {
  return (
    <div className='product-template'>
      <BreadCrumb breadcrumb={breadcrumb} />
      <GridBox columns={12} gap={10} >
        <GridBox.GridItem columnMerge={3}>
          <SideBar brand={brand} delivery={delivery} compressor={compressor} energy={energy} coil={coil} appliances={appliances}/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={9} className='pt-[20px]'>
          <ProductListing list_1={list_1}/>
        </GridBox.GridItem>
      </GridBox>
    </div>
  )
}
