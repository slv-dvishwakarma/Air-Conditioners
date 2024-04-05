import React from 'react'
import { FilterCheckBox } from '../FilterCheckBox';
import { PriceFilter } from '../PriceFilter';
import { ColorFilter } from '../ColorFilter';
import { FilterCheckBoxTemplate } from '../FilterCheckBox/FilterCheckBoxTemplate';


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
}

export const SideBar: React.FC<SideBarProps> = ({delivery, compressor, energy, coil, appliances}) => {
    return (
        <>
        
            <PriceFilter />
            <FilterCheckBox />
            <FilterCheckBoxTemplate id={delivery.name} label={delivery.label} option={delivery.options} name={delivery.name} />
            <FilterCheckBoxTemplate id={compressor.name} label={compressor.label} option={compressor.options} name={compressor.name} />
            <FilterCheckBoxTemplate id={energy.name} label={energy.label} option={energy.options} name={energy.name} />
            <FilterCheckBoxTemplate id={coil.name} label={coil.label} option={coil.options} name={coil.name} />
            <FilterCheckBoxTemplate id={appliances.name} label={appliances.label} option={appliances.options} name={appliances.name} />
            <ColorFilter />
 
        </>
    )
}
