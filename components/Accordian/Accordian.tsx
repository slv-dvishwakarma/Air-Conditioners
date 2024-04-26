import React, { useState } from 'react'
import { AccountForm } from '../AccountForm';
import { SVGIcon } from '../Icons';
import { Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';


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

interface AccordianProps {
  label?: string;
  button: string;
  bank: TabItem[];
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const Accordian: React.FC<AccordianProps> = ({ label, bank, button, control, errors }) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className='bank'>
      <label className='text-base font-medium leading-[21px]'>{label}</label>
      <div className='border mt-5 rounded-xl border-solid border-[#BEBEBE]'>
        {bank.map((items, index) => (
          <div key={index} className={`accordion-item px-[15px] py-3  ${index === 0 ? "border-b-[0.5px] border-b-[#BEBEBE] border-solid" : ""}`}>
            <div
              className={`accordion-title flex items-center gap-3 cursor-pointer ${activeIndex === index ? 'active' : ''}`}
              onClick={() => onTitleClick(index)}
            >
              {activeIndex === index ? <SVGIcon name="dotcircle" className='text-2xl text-[#7E52FF]' /> : <SVGIcon name="circle" className='text-2xl text-[#DFE4EA]' />}
              <span className='text-base font-medium leading-[21px] text-[#2E2E2E]'>{items.title}</span>
            </div>
            {activeIndex === index &&
              <AccountForm checkbox={items.checkbox} account={items.account} ifsc={items.ifsc} button={button} upi={items.upi} control={control} errors={errors}/>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

