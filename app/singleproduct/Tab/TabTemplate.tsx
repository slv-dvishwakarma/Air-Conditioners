"use client"
import React, { useState } from 'react';

interface TabProps {
    tabLabels: string[];
    tabContents: React.ReactNode[];
}

export const TabTemplate: React.FC<TabProps> = ({ tabLabels, tabContents }) => {
    const [activeTab, setActiveTab] = useState<number>(3);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className='border-b-[#BBBFBF] border-b border-solid pt-[20px] pb-[50px]'>
            <div className="pt-4">
                <div className="xl:flex lg:flex md:flex block justify-between h-12 items-center  space-y-4 ">
                    {tabLabels.map((tab, index) => (
                        <span
                            key={index}
                            className={`text-sm p-4 cursor-pointer relative font-semibold xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex justify-center rounded leading-[17px] tracking-normal ${activeTab === index ? 'text-accentColor' : 'text-[#191033] border border-solid border-[#4C3199] xl:border-[transparent] lg:border-[transparent] md:border-[transparent]'} ${activeTab === index ? (index === 0 ? 'xl:rounded-tl-xl lg:rounded-tl-xl md:rounded-tl-xl rounded xl:rounded-bl-xl lg:rounded-bl-xl md:rounded-bl-xl' : 'xl:rounded-tr-xl lg:rounded-tr-xl md:rounded-tr-xl rounded xl:rounded-br-xl lg:rounded-br-xl md:rounded-br-xl') : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                {tabContents[activeTab]}
            </div>
        </div>
    );
};
