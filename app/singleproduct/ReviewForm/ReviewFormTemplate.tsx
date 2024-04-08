"use client"
import { Email } from '@/components/Email';
import { GridBox } from '@/components/GridBox';
import { Text } from '@/components/Text';
import { TextArea } from '@/components/TextArea';
import React from 'react'
import { useForm } from 'react-hook-form';

interface ReviewItem {
    title: string;
    label: string;
}

interface FormItem {
    title: string;
    label: string;
    review: string;
}

interface FieldItem {
    placeholder: string;
    name: string;
    label: string;
}

interface ReviewFormTemplateProps {
    name: FieldItem;
    email: FieldItem;
    message: FieldItem;
    button: string;
    review: ReviewItem;
    form: FormItem;
}

export const ReviewFormTemplate: React.FC<ReviewFormTemplateProps> = ({ name, email, message, button, review, form }) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <GridBox columns={2} gap={10} className='sm:grid py-[50px] xl:px-[50px] lg:px-[50px] md:px-[50px] px-[10px] xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
            <GridBox.GridItem columnMerge={1}>
                <div className='space-y-3'>
                <h5 className='text-sm font-semibold'>{review.title}</h5>
                <span className='text-[#777777] text-[12px]'>{review.label}</span>
                </div>
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-3'>
                    <h6 className='text-lg font-semibold'>{form.title}</h6>
                    <span className='text-[#777777] text-[12px]'>{form.label}</span><br />
                    <span className='text-[#777777] text-[12px]'>{form.review}</span>
                    </div>
                    <div>
                        <Text placeholder={name.placeholder} name={name.name} control={control} errors={errors} label={name.label}/>
                    </div>
                    <div>
                        <Email placeholder={email.placeholder} name={email.name} control={control} errors={errors} label={email.label}/>
                    </div>
                    <div>
                        <TextArea placeholder={message.placeholder} name={message.name} control={control} errors={errors} label={message.label}/>
                    </div>
                    <div className='pt-[20px]'>
                        <button type='submit' className='bg-accentColor text-white px-[30px] py-2 rounded-[10px] w-full'>{button}</button>
                    </div>
                </form>
            </GridBox.GridItem>
        </GridBox>
    )
}
