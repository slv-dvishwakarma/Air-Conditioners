"use client"
import { Text } from '@/components/Text';
import React from 'react'
import { useForm } from 'react-hook-form';

interface GrandTotalItem {
    label: string;
    title: string;
}

interface CouponItem {
    name: string;
    placeholder: string;
    label: string;
}

interface TotalItemProps {
    title: string;
    coupon: CouponItem;
    item: number;
    items: string;
    button: string;
    coupon_button: string;
    total: GrandTotalItem[];
}

export const TotalItem: React.FC<TotalItemProps> = ({ title, coupon, item, items, button, coupon_button, total }) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();


    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    const handleCheckout = () => {
        window.location.href = '/checkout';
    }

    return (
        <section className='py-10 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] px-5'>
            <div className='pb-8 border-b border-gray-300'>
                <h1 className='font-bold text-3xl leading-10 text-black'>{title}</h1>
            </div>
            <div className='py-6'>
                <p className='font-normal text-lg leading-8 text-black'>{item} {items}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='mb-1.5 text-gray-600 text-lg font-medium'>{coupon.label}</label>
                <Text name={coupon.name} placeholder={coupon.placeholder} control={control} errors={errors} />
                <button type='submit' className='rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80'>{coupon_button}</button>
            </form>
            <div className='total divide-y-2'>
                {total.map((item, index) => (
                    <div key={index} className='flex items-center justify-between'>
                        <p>{item.label}</p>
                        <p className='font-normal text-lg leading-8'>{item.title}</p>
                    </div>
                ))} 
            </div>
            <div className='my-8'>
                <button type='button' onClick={handleCheckout} className='w-full text-center bg-accentColor rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700'>{button}</button>
            </div>
        </section>

    )
}
