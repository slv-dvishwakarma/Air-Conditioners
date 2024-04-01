"use client"
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

interface CheckBoxProps {
    id: string;
    label: string;
    name: string;
    option: string[];
}

export const CheckBox: React.FC<CheckBoxProps> = ({ option, label, name }) => {
    const [isToggled, setIsToggled] = useState(true);
    const [checkedValues, setCheckedValues] = useState<string[]>([]);

    const toggle = () => {
        setIsToggled(!isToggled);
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (event.target.checked) {
            setCheckedValues(prevState => [...prevState, value]);
        } else {
            setCheckedValues(prevState => prevState.filter(item => item !== value));
        }
    }

    useEffect(() => {
        if (checkedValues.length > 0) {
            console.log("Checked values:", checkedValues);
        }
    }, [checkedValues]);

    return (
        <div className='checkbox border-b-[#d6d6d6] border-b border-solid pb-[20px] pt-[20px]'>
            <div className='toggler'>
                <div className='flex justify-between items-center cursor-pointer' onClick={toggle}>
                    <label className='text-base font-medium leading-[21px] tracking-[0px] text-left'>{label}</label>
                    {isToggled ? (
                        <span className='text-[25px]'><MdKeyboardArrowDown /></span>
                    ) : (
                        <span className='text-[25px]'><MdKeyboardArrowUp /></span>
                    )}
                </div>
                <div className={`overflow-hidden transition-height duration-500 ease-in-out ${isToggled ? 'h-auto' : 'h-0'}`}>
                    <div className='checkbox-options pt-[16px] gap-10 space-y-2.5'>
                        {option.map((item, key) => (
                            <label key={key} className='gap-2 flex items-center'>
                                <input
                                    id={`${name}-${key}`}
                                    type="checkbox"
                                    value={item}
                                    onChange={handleCheckboxChange}
                                    className='checkbox-color-setting w-[20px] h-[20px] border border-solid border-[#BEBEBE] hover:border hover:border-solid hover:border-[#BEBEBE] rounded active:border-solid active:border active:border-[#BEBEBE] focus-removed-css checked:bg-black'
                                />
                                <span className='text-sm font-normal leading-[16.94px] text-left text-[#1C1C1C]'>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
