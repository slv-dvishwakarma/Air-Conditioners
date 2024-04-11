import React from 'react'
import { TabTemplate } from './TabTemplate'
import { Product } from '@/components/template/Product'
import { ReviewForm } from '../ReviewForm'
import { SizeChart } from '../SizeChart'


interface ViewedItem {
    company: string;
    name: string;
    image: string;
    rank: number;
    rank_list: number;
    Price: number;
    discount_price?: number;
    delivery: string;
    currancy: string;
}

interface SizeItem {
    size: string;
    ton: string;
}

interface ViewedProps {
    products: ViewedItem[];
    tab: string[];
    title: string;
    label: string[];
    chart_label: string[];
    size_chart: SizeItem[];
}


export const Tab: React.FC<ViewedProps> = ({products, tab, label, title, chart_label, size_chart}) => {
    return (
        <TabTemplate
            tabLabels={tab}
            tabContents={[
                <div key="description" className='xl:px-[50px] lg:px-[50px] md:px-[50px] px-[10px] py-[30px]'>
                    <h2 className='xl:text-2xl lg:text-2xl md:text-2xl text-[20px] leading-8 text-accentColor'>{title}</h2>
                    <ul className='text-[15px] space-y-3 pt-3'>
                        {label?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul> 
                </div>,
                <Product key="product" products={products}/>,
                <ReviewForm key="reviewForm" />,
                <SizeChart key="sizeChart" chart_label={chart_label} size_chart={size_chart}/>
            ]}
        />
    )
}
