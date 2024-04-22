import { GridBox } from '@/components/GridBox'
import React from 'react'
import { CartItem } from '../CartItem'
import { TotalItem } from '../TotalItem'



interface CouponItem {
    name: string;
    placeholder: string;
    label: string;
}

interface SummeryItem {
    title: string;
    coupon: CouponItem;
}

interface ProductDataItem {
    name: string;
    category: string;
    price: number;
}

interface ProductItem {
    productImage: string;
    defaultValue: number;
    productData: ProductDataItem;
}

interface CartItem {
    title: string;
    cartItemCount: number;
    currency: string;
}

interface CartItemProps {
    cartproduct: ProductItem[];
    cartpagedata: CartItem;
    summery: SummeryItem;
    item: number;
}

export const CartPage: React.FC<CartItemProps> = ({ cartproduct, cartpagedata, summery, item }) => {
    return (
        <GridBox columns={6}  gap={10} className='sm:grid'>
            <GridBox.GridItem columnMerge={4} colMargeDesktop={4} colMargeLaptop={6} colMargeTablet={6}>
                <CartItem cartproduct={cartproduct} cartpagedata={cartpagedata}/>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={2} colMargeDesktop={2} colMargeLaptop={6} colMargeTablet={6}>
                <TotalItem title={summery.title} coupon={summery.coupon} item={item}/>
            </GridBox.GridItem>
        </GridBox>
    )
}

