import { GridBox } from '@/components/GridBox'
import React from 'react'
import { CartItem } from '../CartItem'
import { TotalItem } from '../TotalItem'

interface GrandTotalItem {
    label: string;
    title: string;
}

interface StaticItem {
    items: string;
    apply: string;
    Checkout: string;
    update_cart: string;
    total: GrandTotalItem[];
}

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
    static_item: StaticItem; 
}

export const CartPage: React.FC<CartItemProps> = ({ cartproduct, cartpagedata, summery, item, static_item}) => {
    return (
        <GridBox columns={6}  gap={10} className='sm:grid'>
            <GridBox.GridItem columnMerge={4} colMargeDesktop={4} colMargeLaptop={6} colMargeTablet={6}>
                <CartItem cartproduct={cartproduct} cartpagedata={cartpagedata} title={static_item.items} button={static_item.update_cart}/>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={2} colMargeDesktop={2} colMargeLaptop={6} colMargeTablet={6}>
                <TotalItem title={summery.title} coupon={summery.coupon} item={item} items={static_item.items} button={static_item.Checkout} coupon_button={static_item.apply} total={static_item.total}/>
            </GridBox.GridItem>
        </GridBox>
    )
}

