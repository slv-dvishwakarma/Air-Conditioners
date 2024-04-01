import React from 'react'
import { CheckBox } from '../CheckBox';

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
}

export const SideBar: React.FC<SideBarProps> = ({ brand, delivery, compressor, energy, coil, appliances }) => {

    return (
        <>
            <CheckBox id={brand.name} label={brand.label} option={brand.options} name={brand.name} />
            <CheckBox id={delivery.name} label={delivery.label} option={delivery.options} name={delivery.name} />
            <CheckBox id={compressor.name} label={compressor.label} option={compressor.options} name={compressor.name} />
            <CheckBox id={energy.name} label={energy.label} option={energy.options} name={energy.name} />
            <CheckBox id={coil.name} label={coil.label} option={coil.options} name={coil.name} />
            <CheckBox id={appliances.name} label={appliances.label} option={appliances.options} name={appliances.name} />
        </>
    )
}
