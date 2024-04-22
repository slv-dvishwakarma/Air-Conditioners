"use client"
import React from 'react';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { SVGIcon } from '../Icons';

interface QuantityProps {
  title?: string;
  id: string;
  defaultvalue: number;
  name: string;
  label?: string;
  control: Control<FieldValues>;

  onChange?: (label: string) => void;
}

export const Quantity: React.FC<QuantityProps> = ({ label, name, control, onChange, id, defaultvalue, title }) => {
  return (
    <div className='quantity'>
      <div className='quantity-box'>
        {label && (
          <label className='text-base font-medium leading-[21px] tracking-[0px] text-left'>{label}</label>
        )}
        <Controller
          name={name}
          control={control}
          defaultValue={defaultvalue}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <div className='flex items-center gap-8 '>
              {title && (
                <div className='optional'>
                  <p>{title}</p>
                </div>
              )}
              <div className='w-[157px]  flex items-center relative mx-auto'>
                <button className='absolute text-xs left-6'
                  type="button"
                  onClick={() => onChange(value - 1)}
                  disabled={value <= 1}
                >
                  <SVGIcon name="Minus" />
                </button>
                <input
                  type="tel"
                  id={id}
                  name={name}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/\D/, '');
                    onChange(newValue);
                  }}
                  value={value}
                  className='h-[43px] text-center  px-[30px] py-2.5 w-full rounded-lg border-[0.5px] border-solid border-[#BEBEBE] '
                />
                <button className='absolute text-xs right-6'
                  type="button"
                  onClick={() => onChange(value + 1)}
                >
                  <SVGIcon name="Plus" />
                </button>
              </div>
            </div>
          )}
        />
      </div>
      <div >
      </div>
    </div>
  );
};
