"use client"
import { Rating } from '@/app/ac/Rating'
import { Quantity } from '@/components/Quantity';
import React from 'react'
import { useForm } from 'react-hook-form';
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TbRulerMeasure } from "react-icons/tb";

interface FunctionItem {
    label: string;
    icon: string;
}

interface QuantityItem {
    id: string,
    defaultvalue: number
    name: string,
}

interface DescriptionProps {
    title: string;
    rating: number;
    rank_list: number;
    Price: number;
    discount_price: number;
    emi: string;
    service: string;
    delivery: string;
    currency: string;
    mrp: string;
    label?: string[];
    button: string;
    quantity: QuantityItem;
    funitem: FunctionItem[];
}

export const ProductDescription: React.FC<DescriptionProps> = ({ title, rating, rank_list, Price, discount_price, emi, service, delivery, currency, mrp, label, quantity, button, funitem }) => {
    const discountPercent = ((discount_price - Price) / discount_price) * 100;

    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='description'>
                <div>
                    <h1 className='text-2xl leading-8'>{title}</h1>
                    <Rating rating={rating} rank_list={rank_list} />

                    <div className='space-y-2.5 flex items-center gap-[5px]'>
                        <span className='xl:text-[18px] lg:text-[18px] md:text-[18px] text-[14px] relative -top-2 xl:text-black lg:text-black md:text-black text-accentColor'>{currency}</span>
                        <span className='xl:text-[28px] lg:text-[28px] md:text-[28px] text-[16px] xl:text-black lg:text-black md:text-black text-accentColor'>{Price}</span>
                        <span className='text-paragraph text-[14px]'>{mrp}</span>
                        <span className='text-paragraph text-[13px] line-through'>{discount_price}</span>
                        <span className='text-[14px] text-[#0F1111] xl:block lg:block md:block hidden'> ({discountPercent.toFixed(2)}% off)</span>
                    </div>
                    <ul className='text-[15px] space-y-3 pt-3'>
                        {label?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <div className='flex gap-10 pt-[20px]'>
                        <Quantity id={quantity.id} name={quantity.name} defaultvalue={quantity.defaultvalue} control={control} />
                        <button type='submit' className='bg-accentColor text-white px-[30px] py-2 rounded-[10px]'>{button}</button>
                    </div>

                    <div className='flex items-center justify-between w-[60%] border-b-[#BBBFBF] border-b border-solid py-[20px]'>
                        {funitem.map((item, index) => (
                            <div key={index} className='flex items-center text-[#333] gap-2'>
                                {item.icon === "MdCompareArrows" && <MdCompareArrows />}
                                {item.icon === "CiHeart" && <CiHeart />}
                                {item.icon === "TbRulerMeasure" && <TbRulerMeasure />}
                                <span className='text-[14px] font-medium'>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    {errors[quantity.name] && <span className="text-red-500 text-sm">Please add Qunatity</span>}
                    <div className='space-y-2.5 pt-[20px]'>
                        <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{emi}</span>
                        <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{delivery}</span>
                        <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{service}</span>
                    </div>

                </div>
            </div>
        </form>
    )
}
