import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';

interface CheckBoxProps {
    label: string;
    name: string;
    option: string[];
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ option, label, name, control, errors }) => {
    return (
        <div className='checkbox'>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value = [] } }) => (
                    <div>
                        <label className='text-[#777777] text-[12px] font-medium leading-[21px] tracking-[0px] text-left'>{label}</label>
                        <div className='checkbox-options pt-[16px] flex items-center flex-wrap gap-4'>
                            {option.map((item, key) => (
                                <label key={key} className={`gap-2 flex items-center rounded-lg px-3 py-1.5 cursor-pointer ${value.includes(item) ? 'bg-accentColor border-[0.5px] border-solid border-accentColor' : 'border-[0.5px] border-solid border-[#BEBEBE]'}`}>
                                    <input
                                        id={`${name}-${key}`}
                                        type="checkbox"
                                        value={item}
                                        onChange={(e) => {
                                            const checkedValue = e.target.value;
                                            const updatedValue = value.includes(checkedValue) ? value.filter((val: string) => val !== checkedValue) : [...value, checkedValue];
                                            onChange(updatedValue);
                                        }}
                                        checked={value.includes(item)}
                                        className='hidden'
                                    />
                                    <span className={`text-sm font-normal leading-[16.94px] text-left  ${value.includes(item) ? 'text-white' : 'text-[#1C1C1C]'}`}>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            />
            <div className='mt-3'>
                {errors[name] && <span className="text-red-500 text-sm">Please select rooms</span>}
            </div>
        </div>
    );
};
