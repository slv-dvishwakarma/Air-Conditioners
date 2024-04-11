"use client"
import React from 'react'
import { FilterCheckBox } from '../FilterCheckBox';
import { PriceFilter } from '../PriceFilter';
import { ColorFilter } from '../ColorFilter';


interface PriceItem {
    range: number[];
    maxPrice: number;
    label: string;
  }

interface BrandItem {
    label: string;
    name: string;
    options: string[];
}


interface SideBarProps {
    delivery: BrandItem;
    compressor: BrandItem;
    energy: BrandItem;
    coil: BrandItem;
    appliances: BrandItem;
    price: PriceItem;
    brand: BrandItem;
    color: BrandItem;
}

export const SideBar: React.FC<SideBarProps> = ({delivery, compressor, energy, coil, appliances, price, brand, color}) => {
    return (
        <>
        
            <PriceFilter price={price}/>
            <FilterCheckBox id={brand.name} label={brand.label} option={brand.options} name={brand.name}/>
            <FilterCheckBox id={delivery.name} label={delivery.label} option={delivery.options} name={delivery.name} />
            <FilterCheckBox id={compressor.name} label={compressor.label} option={compressor.options} name={compressor.name} />
            <FilterCheckBox id={energy.name} label={energy.label} option={energy.options} name={energy.name} />
            <FilterCheckBox id={coil.name} label={coil.label} option={coil.options} name={coil.name} />
            <FilterCheckBox id={appliances.name} label={appliances.label} option={appliances.options} name={appliances.name} />
            <ColorFilter color={color}/>
 
        </>
    )
}
