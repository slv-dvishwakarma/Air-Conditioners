import { SVGIcon } from '@/components/Icons';
import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';


interface InputProps {
    name: string;
    placeholder: string;
    icon?: string;
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
}

export const Search: React.FC<InputProps> = ({ name, placeholder, icon, control, errors }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                rules={{ required: false }}
                render={({ field: { onChange, value } }) => (
                    <span className='input-border flex items-center border rounded-[20px] border-solid border-[#BEBEBE] relative'>
                        {icon && (
                            <SVGIcon className='text-accentColor text-[15px] pl-0 pl-3 py-0 absolute left-0' name={icon} />
                        )}
                        <input
                            type="text"
                            className="w-full border-none focus:outline-none focus:shadow-none shadow-none placeholder:text-[#9D9D9D] text-[14px] px-8 py-[5px] rounded-[20px]"
                            placeholder={placeholder}
                            autoComplete="off"
                            value={value}
                            onChange={onChange}
                        />
                    </span>
                )}
            />
        </>
    );
};

