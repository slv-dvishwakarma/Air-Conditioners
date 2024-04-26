"use client"
import { Email } from '@/components/Email';
import { Phone } from '@/components/Phone';
import { TextArea } from '@/components/TextArea';
import { TextSelection } from '@/components/TextSelection';
import React from 'react'
import { useForm } from 'react-hook-form';

interface FormItem {
    name: string;
    placeholder: string;
}

interface EnquiryFormItem {
    fname: FormItem;
    email: FormItem;
    phone: FormItem;
    message: FormItem;

}

interface EnquiryFormProps {
    title: string;
    label: string;
    enquiry_form: EnquiryFormItem;
    button: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ title, enquiry_form, label, button }) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className='EnquiryForm shadow-[rgba(149,157,165,0.2)_0px_8px_24px] px-[25px] py-5 rounded-xl'>
            <h3 className='text-3xl font-semibold text-accentColor'>{title}</h3>
            <p className='text-gray-500 text-lg pt-2.5'>{label}</p>
            <form onSubmit={handleSubmit(onSubmit)} className='pt-4'>
                <TextSelection name={enquiry_form.fname.name} placeholder={enquiry_form.fname.placeholder} control={control} errors={errors} required={true} />
                <Email name={enquiry_form.email.name} placeholder={enquiry_form.email.placeholder} control={control} errors={errors} />
                <Phone name={enquiry_form.phone.name} placeholder={enquiry_form.phone.placeholder} control={control} errors={errors} />
                <TextArea name={enquiry_form.message.name} placeholder={enquiry_form.message.placeholder} control={control} errors={errors} />
                <div className='pt-4'>
                    <button type='submit' className='w-full text-center bg-accentColor rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700'>{button}</button>
                </div>
            </form>
        </div>
    )
}
