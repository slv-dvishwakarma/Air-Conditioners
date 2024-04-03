import { Dropdown } from '@/components/DropDown';
import Image from 'next/image'
import React from 'react'

interface UserProps {
    options: string[];
}

export const User: React.FC<UserProps> = ({ options }) => {
    return (
        <div className='flex items-center'>
            <Image
                className='w-[30px] mr-3 rounded-[50%]'
                src="/user.jpg"
                alt=""
                width={300}
                height={158}
            />
            <div className='text-white'>
               <p className='text-[13px]'>Hello John</p> 
               <Dropdown options={options}/>
            </div>
        </div>
    )
}
