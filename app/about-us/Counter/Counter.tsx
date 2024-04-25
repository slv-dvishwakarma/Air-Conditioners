import { GridBox } from '@/components/GridBox'
import { SVGIcon } from '@/components/Icons';
import React from 'react'

interface CounterItem {
    icon: string;
    title: string;
    value: string;
}

interface CounterProps {
    label: string;
    counter: CounterItem[];
}

export const Counter: React.FC<CounterProps> = ({ label, counter }) => {
    return (
    <div className='py-[50px]'>
            <h2 className='text-[40px] text-accentColor text-center'>{label}</h2>
            <GridBox columns={5} desktop={5} laptop={3} tablet={3} gap={5} className='sm:grid items-center pt-8 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-7'>
                {counter.map((items, index) => (
                    <GridBox.GridItem columnMerge={1} key={index} className='box shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] text-center py-[25px] px-[10px] rounded-[20px] space-y-2'>
                        <SVGIcon className="xl:text-4xl lg:text-4xl md:text-4xl text-5xl flex justify-center text-accentColor" name={items.icon} />
                        <h3 className='xl:text-[18px] lg:text-[18px] md:text-[18px] text-[25px] text-primary '>{items.title}</h3>
                        <p className='text-[27px] text-primary font-semibold'>{items.value}</p>
                    </GridBox.GridItem>
                ))}
            </GridBox>
        </div>
    )
}
