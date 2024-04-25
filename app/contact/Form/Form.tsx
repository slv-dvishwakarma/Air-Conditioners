import { EnquiryForm } from '@/app/sale/EnquiryForm'
import { GridBox } from '@/components/GridBox'
import Image from 'next/image'
import React from 'react'

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
    image: string;
    title: string;
    label: string;
    enquiry_form: EnquiryFormItem;
}

export const Form: React.FC<EnquiryFormProps> = ({ title, enquiry_form, label, image }) => {
  return (
    <GridBox columns={2} gap={10} className='sm:grid py-[50px] items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
        <GridBox.GridItem columnMerge={1}>
            <Image src={image} alt={title} width={400} height={400} className='m-auto rounded-xl'/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1}>
        <EnquiryForm title={title} label={label} enquiry_form={enquiry_form}/>
        </GridBox.GridItem>
    </GridBox>
  )
}
