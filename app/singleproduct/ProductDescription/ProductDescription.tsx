"use client"
import { Rating } from '@/app/ac/Rating'
import { Quantity } from '@/components/Quantity';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { SizeChart } from '../SizeChart';


interface FunctionItem {
    label: string;
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
    wishlist: FunctionItem;
    Compare: FunctionItem;
    size: FunctionItem;
}

export const ProductDescription: React.FC<DescriptionProps> = ({ title, rating, rank_list, Price, discount_price, emi, service, delivery, currency, mrp, label, quantity, button, Compare, wishlist, size }) => {
    const discountPercent = ((discount_price - Price) / discount_price) * 100;

    const [heart, setHeart] = useState(false);
    const [isInComparison, setIsInComparison] = useState(false);
    const [sizeopen, setSizeOpen] = useState(false);

    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    const handleSize = () => {
        setSizeOpen(true);
    }

    const handleCompareClick = () => {
        setIsInComparison(!isInComparison);
        console.log(isInComparison ? 'Removed from Comparison' : 'Added to Comparison');
    };

    const handleHeartClick = () => {
        const newHeartState = !heart;
        setHeart(newHeartState);
        console.log(newHeartState ? 'Added to Wishlist' : 'Removed from Wishlist');
    };

    const handleClose = () => {
        setSizeOpen(false);
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='description'>
                    <div>
                        <h1 className='xl:text-2xl lg:text-2xl md:text-2xl text-xl  leading-8'>{title}</h1>
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
 
                        <div className='flex xl:gap-5 lg:gap-5 md:gap-5 gap-3 pt-[20px]'>
                            <Quantity id={quantity.id} name={quantity.name} defaultvalue={quantity.defaultvalue} control={control} />
                            <button type='submit' className='bg-accentColor text-white px-[30px] py-2 rounded-[10px]'>{button}</button>
                        </div>
                        {errors[quantity.name] && <span className="text-red-500 text-sm">Please add Qunatity</span>}
                        <div className='flex flex-wrap items-center justify-between xl:w-[60%] lg:w-[60%] md:w-[60%] w-full border-b-[#BBBFBF] border-b border-solid py-[20px]'>
                            <div className='flex items-center text-[#333] gap-2 cursor-pointer' onClick={handleCompareClick}>
                                <span className={`${isInComparison ? "text-accentColor" : "text-black"}`}><MdCompareArrows /></span>
                                <span className='text-[14px] font-medium'>{Compare.label}</span>
                            </div>
                            <div className='flex items-center text-[#333] gap-2 cursor-pointer' onClick={handleHeartClick}>
                                {heart ? (
                                    <span className='text-accentColor'><FaHeart /></span>
                                ) : (
                                    <span ><FaRegHeart /></span>
                                )}
                                <span className='text-[14px] font-medium'>{wishlist.label}</span>

                            </div>
                            <div className='flex items-center text-[#333] gap-2 cursor-pointer' onClick={handleSize}>
                                <span><TbRulerMeasure /></span>
                                <span className='text-[14px] font-medium'>{size.label}</span>
                            </div>

                        </div>

                        <div className='space-y-2.5 pt-[20px]'>
                            <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{emi}</span>
                            <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{delivery}</span>
                            <span className='text-[#565959] text-[14px] xl:block lg:block md:block hidden'>{service}</span>
                        </div>
                    </div>
                </div>
            </form>
            {sizeopen && (
                <div className='fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]'>
                    <div className='flex items-center justify-center min-h-screen'>
                        <div className='relative bg-white xl:w-2/5 lg:w-2/5 md:w-9/12 w-full mx-auto shadow-lg rounded-[20px] '>
                            <div className='size-guide p-6 items-center border-b-[#e9ecef] border-b border-solid flex justify-between '>
                                <span className='xl:text-xl lg:text-xl md:text-xl text-[15px] font-medium text-accentColor'>Room air conditioner with Inverter compressor</span>
                                <span className='xl:text-[25px] lg:text-[25px] md:text-[25px] text-[20px] cursor-pointer' onClick={handleClose}><RxCross2 /></span>
                            </div>
                            <SizeChart />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
