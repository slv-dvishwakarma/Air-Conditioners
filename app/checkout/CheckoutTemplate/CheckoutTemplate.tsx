"use client"
import { GridBox } from '@/components/GridBox';
import React from 'react'
import { useForm } from 'react-hook-form';
import { DeliveryAddressForm } from '../DeliveryAddressForm';
import { TextSelection } from '@/components/TextSelection';
import Image from 'next/image';
import { Accordian } from '@/components/Accordian';

interface UPIItem {
    label: string;
    placeholder: string;
    name: string;
    guide_text: string;
  }
  
  interface CheckboxItem {
    label: string;
    name: string;
  }
  
  interface AccountItem {
    placeholder: string;
    name: string;
  }
  
  interface TabItem {
    title: string;
    checkbox?: CheckboxItem;
    account?: AccountItem;
    ifsc?: AccountItem;
    upi?: UPIItem;
  }

interface TextItem {
    name: string;
    placeholder: string;
}

interface totalItem {
    label: string;
    title: string;
}

interface ProductItem {
    image: string;
    name: string;
    qty: number;
    price: string;
}

interface FormItem {
    coupon: TextItem;
    fname: TextItem;
    lname: TextItem;
    house_no: TextItem;
    house_name: TextItem;
    city: TextItem;
    state: TextItem;
    zip: TextItem;
    phone: TextItem;
    email: TextItem;
}

interface CheckoutTemplateProps {
    checkout_form: FormItem;
    product: ProductItem[];
    total: totalItem[];
    item: number;
    label?: string;
    button: string;
    bank: TabItem[];
}


export const CheckoutTemplate: React.FC<CheckoutTemplateProps> = ({ checkout_form, product, total, item, button, bank, label }) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='pb-[50px]'>
            <h1 className='font-semibold text-3xl leading-9 text-center px-0 py-[50px] text-accentColor'>Checkout</h1>
            <GridBox columns={3} desktop={3} laptop={1} tablet={1} gap={10} className='sm:grid'>
                <GridBox.GridItem columnMerge={2} colMargeDesktop={2} colMargeLaptop={1} colMargeTablet={1} className='space-y-8'>
                    <div className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-3xl p-[30px]'>
                        <h3 className='font-bold text-lg leading-6 text-accentColor'>Add Coupon Code</h3>
                        <GridBox columns={3} className='sm:grid pt-5'>
                            <GridBox.GridItem columnMerge={2}>
                                <TextSelection name={checkout_form.coupon.name} placeholder={checkout_form.coupon.placeholder} control={control} errors={errors} required={false} />
                            </GridBox.GridItem>
                            <GridBox.GridItem columnMerge={1}>
                                <button type='button' className='rounded-lg w-full bg-accentColor px-3 py-1.5 h-[50px] text-white text-sm font-semibold text-center transition-all duration-500 hover:bg-[#131921]'>Apply</button>
                            </GridBox.GridItem>
                        </GridBox>
                    </div>
                    <div className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-3xl p-[30px]'>
                        <h3 className='font-bold text-lg leading-6 text-accentColor'>Add Billing Details</h3>
                        <DeliveryAddressForm fname={checkout_form.fname} lname={checkout_form.lname} zip={checkout_form.zip} email={checkout_form.email} house_no={checkout_form.house_no} house_name={checkout_form.house_name} city={checkout_form.city} state={checkout_form.state} phone={checkout_form.phone} control={control} errors={errors} />
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={1}>
                    <div className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-3xl p-[30px]'>
                        <h3 className='font-bold text-lg leading-6 text-accentColor'>Order Summary</h3>
                        <div className='space-y-5 pt-5'>
                            {product.map((items, index) => (
                                <div key={index} className='flex gap-5'>
                                    <Image src={items.image} alt={items.name} width={500} height={500} className='w-[100px] rounded-[10px]' />
                                    <div className='space-y-2'>
                                        <p className='line-clamp-2 text-[15px] font-semibold leading-5'>{items.name}</p>
                                        <p className='font-normal text-base leading-7 text-gray-500'>{items.price} x {items.qty}</p>
                                        <button className='font-normal text-base leading-7 text-accentColor'>remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-5 py-3 flex justify-between items-center border-y-[#ced4da] border-b border-solid border-t'>
                            <h3 className='font-bold text-lg leading-6 text-black '>Total</h3>
                            <p>{item} Items</p>
                        </div>
                        <div className='total divide-y-2'>
                            {total.map((item, index) => (
                                <div key={index} className='flex items-center justify-between py-3'>
                                    <p>{item.label}</p>
                                    <p className='font-normal text-lg leading-8'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className='payment pt-5'>
                            <h3 className='font-bold text-lg leading-6 text-accentColor'>Add Payment Method</h3>
                            <Accordian button={button} bank={bank}/>
                        </div>
                        <button type='submit' className='rounded-lg w-full bg-accentColor px-3 py-1.5 h-[50px] text-white text-sm font-semibold text-center transition-all duration-500 hover:bg-[#131921] mt-5'>Checkout</button>
                    </div>
                </GridBox.GridItem>
            </GridBox>
        </form>
    )
}

