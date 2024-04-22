"use client"
import { SVGIcon } from '@/components/Icons';
import { Quantity } from '@/components/Quantity';
import Image from 'next/image';
import React from 'react'
import { useForm } from 'react-hook-form';



interface ProductDataItem {
    name: string;
    category: string;
    price: number;
}

interface ProductItem {
    productImage: string;
    defaultValue: number;
    productData: ProductDataItem;
}

interface CartItem {
    title: string;
    cartItemCount: number;
    currency: string;
}

interface CartItemProps {
    cartproduct: ProductItem[];
    cartpagedata: CartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ cartproduct, cartpagedata }) => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();


    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className='py-10'>
                <div className='flex items-center justify-between pb-8 border-b border-gray-300'>
                    <h1 className='font-bold text-3xl leading-10 text-black'>{cartpagedata.title}</h1>
                    <p className='font-bold text-xl leading-8 text-gray-600'>{cartpagedata.cartItemCount} Items</p>
                </div>
                <div className='divide-y-2'>
                {cartproduct.map((items, index) => (
                    <div key={index} className='xl:flex lg:flex md:flex block justify-between gap-10 py-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
                        <div className='product  xl:w-3/5 lg:w-3/5 md:w-6/12 w-full'>
                            <div className='xl:flex lg:flex md:flex flex gap-3 items-center'>
                                <Image src={items.productImage} alt={items.productData.name} width={500} height={500} className='xl:w-[126px] lg:w-[126px] md:w-[126px] w-[150px] rounded-xl' />
                                <div className='prodct-data items-center gap-3 space-y-4'>
                                    <h5 className='font-semibold text-base leading-7 text-black xl:line-clamp-1 lg:line-clamp-1 md:line-clamp-1 line-clamp-2'>{items.productData.name}</h5>
                                    <p className='font-normal text-base leading-7 text-gray-500'>{items.productData.category}</p>
                                    <p className='font-medium text-base leading-7  text-accentColor'>{cartpagedata.currency}{items.productData.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className='product flex justify-between xl:w-2/5 lg:w-2/5 md:w-6/12 w-full xl:items-start lg:items-start md:items-start items-center'>
                            <Quantity id={cartpagedata.title} name={items.productData.name} defaultvalue={items.defaultValue} control={control} />
                            <div className='product'>
                                <p className='font-bold text-lg leading-8 text-accentColor'>{cartpagedata.currency}{items.productData.price}</p>
                            </div>
                            <SVGIcon className="remove w-[30px] h-[30px] justify-center flex text-accentColor items-center rounded-[50%] border border-solid border-[gray] cursor-pointer" name="delete" />
                        </div>

                    </div>
                ))}
                </div>
                <div className="flex items-center xl:justify-end lg:justify-end md:justify-end justify-center xl:mt-0 lg:mt-0 md:mt-0 mt-8">
                    <button className="flex items-center rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                        Update Cart
                        <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round"></path>
                        </svg>
                    </button>
                </div>
            </section>
        </form>
    )
}
