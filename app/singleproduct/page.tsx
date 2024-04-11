import { ParentContainer } from '@/components/ParentContainer'
import React from 'react'
import { Single } from './Single'
import { BreadCrumbs } from '../ac/BreadCrumb'
import { Tab } from './Tab'
import jsonData from "./jsonData.json";

const page = () => {
    return (
        <ParentContainer>
            <BreadCrumbs breadcrumb={jsonData.breadcrumb} />
            <Single images={jsonData.productImages} title={jsonData.description.title} rating={jsonData.description.rank} rank_list={jsonData.description.rank_list} Price={jsonData.description.Price} discount_price={jsonData.description.discount_price} emi={jsonData.description.emi} service={jsonData.description.service} delivery={jsonData.description.delivery} currency={jsonData.description.currency} mrp={jsonData.description.mrp} label={jsonData.description.label} button={jsonData.description.button} quantity={jsonData.quantity} wishlist={jsonData.wishlist} Compare={jsonData.Compare} size={jsonData.size} size_chart={jsonData.size_chart} chart_label={jsonData.chart_label}/>
            <Tab products={jsonData.products} tab={jsonData.tab} title={jsonData.description.title} label={jsonData.description.label} size_chart={jsonData.size_chart} chart_label={jsonData.chart_label}/>
        </ParentContainer>
    )
}

export default page