"use client"
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface CheckBoxProps {
    id: string;
    label: string;
    name: string;
    option: string[];
}

export const ColorCheckBox: React.FC<CheckBoxProps> = ({ option, label, name }) => {
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
            console.log("Color values:", checkedValues);
        }
    }, [checkedValues]);

    return (
        <div className='checkbox border-b-[#BBBFBF] border-b border-solid pb-[20px] pt-[20px]'>
            <div className='toggler cursor-pointer'>
                <div className='flex justify-between items-center ' onClick={toggle}>
                    <label className='text-base font-medium leading-[21px] tracking-[0px] text-left cursor-pointer'>{label}</label>
                    {isToggled ? (
                        <span className='text-[25px]'><MdKeyboardArrowDown /></span>
                    ) : (
                        <span className='text-[25px]'><MdKeyboardArrowUp /></span>
                    )}
                </div>
                <div className={`overflow-hidden transition-height duration-500 ease-in-out ${isToggled ? 'h-auto' : 'h-0'}`}>
                    <div className='checkbox-options pt-[16px] gap-4 flex items-center flex-wrap'>
                        {option.map((item, key) => (
                            <label key={key} className=' flex items-center '>
                                <span className={`border border-solid w-[18px] h-[18px] ${item}`}>
                                    {checkedValues.includes(item) && (
                                        <MdClose className='text-white'/>
                                    )}
                                </span>
                                <input
                                    id={`${name}-${key}`}
                                    type="checkbox"
                                    value={item}
                                    onChange={handleCheckboxChange}
                                    className='checkbox-color-setting w-[20px] h-[20px] border border-solid border-[#BEBEBE] hover:border hover:border-solid hover:border-[#BEBEBE] rounded active:border-solid active:border active:border-[#BEBEBE] focus-removed-css hidden'
                                />
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

