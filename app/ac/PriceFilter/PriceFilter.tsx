"use client"
import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

interface PriceFilterProps {
    defaultRange: number[];
    maxRange: number;
    label: string;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({ defaultRange, maxRange, label }) => {

    const [isToggled, setIsToggled] = useState(true);

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    if (defaultRange[1] > maxRange) {
        defaultRange[1] = maxRange;
    }

    const [range, setRange] = useState<number[]>(defaultRange);
    const [fromValue, setFromValue] = useState<number | string>(defaultRange[0].toString());
    const [toValue, setToValue] = useState<number | string>(defaultRange[1].toString());

    useEffect(() => {
        setRange(defaultRange);
        setFromValue(defaultRange[0].toString());
        setToValue(defaultRange[1].toString());
    }, [defaultRange, maxRange]);

    const handleChanges = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setRange(newValue as [number, number]);
            setFromValue(newValue[0].toString());
            setToValue(newValue[1].toString());
            console.log("Selected range:", newValue);
            console.log("From input value:", newValue[0]);
            console.log("To input value:", newValue[1]);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'from') {
            setFromValue(value);
        } else {
            setToValue(value);
        }
        console.log(`${name} value changed to:`, value);
    };

    const handleInputBlur = () => {
        const from = parseFloat(fromValue.toString());
        const to = parseFloat(toValue.toString());

        if (!isNaN(from) && !isNaN(to)) {
            setRange([from, to]);
        }
    };

    return (
        <div className='pt-[20px] border-b-[#BBBFBF] border-b border-solid pb-[20px]'>
            <div className='flex justify-between items-center cursor-pointer' onClick={toggle}>
                <label className='text-base font-medium leading-[21px] tracking-[0px] text-left cursor-pointer'>{label}</label>
                {isToggled ? (
                    <span className='text-[25px]'><MdKeyboardArrowDown /></span>
                ) : (
                    <span className='text-[25px]'><MdKeyboardArrowUp /></span>
                )}
            </div>
            <div className={`overflow-hidden transition-height duration-500 ease-in-out pt-2  ${isToggled ? 'h-auto' : 'h-0'}`}>
                <Slider
                    value={range}
                    onChange={handleChanges}
                    valueLabelDisplay="auto"
                    min={0}
                    max={maxRange}
                    sx={{
                        color: '#565959',
                        '& .MuiSlider-track': {
                            backgroundColor: '#FF8500',
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            backgroundColor: '#FF8500',
                            '&:before': {
                                content: "''",
                                display: 'block',
                                width: 16,
                                height: 16,
                                borderRadius: '50%',
                                border: '2px solid #FF8500',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                transition: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                backgroundColor: 'white',
                            }
                        },
                        '& .MuiSlider-valueLabel': {
                            display: 'none',
                        }
                    }}
                />
                <div className='flex justify-evenly items-center'>
                    <input
                        type="number"
                        name="from"
                        className='w-[40%] focus:outline-none px-5 py-1 border border-solid border-black'
                        value={fromValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    <span className='w-[20%] text-center text-[#565959] text-[14px]'>To</span>
                    <input
                        type="number"
                        name="to"
                        className='w-[40%] focus:outline-none px-5 py-1 border border-solid border-black'
                        value={toValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
            </div>
        </div>
    );
};

