import React from 'react'
import { CheckBox } from '../CheckBox';
import { PriceFilter } from '../PriceFilter';
import { ColorCheckBox } from '../ColorCheckBox';

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

interface BrandItem {
    label: string;
    name: string;
    options: string[];
}


interface SideBarProps {
    brand: BrandItem;
    delivery: BrandItem;
    compressor: BrandItem;
    energy: BrandItem;
    coil: BrandItem;
    appliances: BrandItem;
    price: PriceItem;
    color: ColorItem;
}

export const SideBar: React.FC<SideBarProps> = ({ brand, delivery, compressor, energy, coil, appliances, price, color }) => {
    return (
        <>
            <PriceFilter defaultRange={price.range} maxRange={price.maxPrice} label={price.label}/>
            <CheckBox id={brand.name} label={brand.label} option={brand.options} name={brand.name} />
            <CheckBox id={delivery.name} label={delivery.label} option={delivery.options} name={delivery.name} />
            <CheckBox id={compressor.name} label={compressor.label} option={compressor.options} name={compressor.name} />
            <CheckBox id={energy.name} label={energy.label} option={energy.options} name={energy.name} />
            <CheckBox id={coil.name} label={coil.label} option={coil.options} name={coil.name} />
            <CheckBox id={appliances.name} label={appliances.label} option={appliances.options} name={appliances.name} />
            <ColorCheckBox id={color.name} label={color.label} option={color.options} name={color.name} />
        </>
    )
}
