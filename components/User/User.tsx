import Image from 'next/image'
import React from 'react'



export const User = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image
                className='w-[30px] mr-3 rounded-[50%]'
                src="/user.jpg"
                alt=""
                width={300}
                height={158}
            />
            <div className='text-white'>
               <p className='text-[13px]'>Hello John</p> 
            </div>
        </div>
    )
}
