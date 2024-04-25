import React from 'react'
import { ParentContainer } from '../ParentContainer';

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className='py-[50px] bg-accentColor' >
            <ParentContainer>
                <h1 className='xl:leading-[60px] lg:leading-[60px] md:leading-[45px] leading-[45px] xl:text-[42px] lg:text-[42px] md:text-[40px] text-[30px] text-white font-normal capitalize'>{title}</h1>
            </ParentContainer>
        </div>
    )

}
