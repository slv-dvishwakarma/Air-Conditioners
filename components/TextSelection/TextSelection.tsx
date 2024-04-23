import React from 'react';
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';



interface InputProps {
    name: string;
    placeholder: string;
    required: boolean;
    label?: string;
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
}

export const TextSelection: React.FC<InputProps> = ({ name, placeholder, control, errors, label, required }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                rules={{ required: required }}
                render={({ field: { onChange, value } }) => (
                    <div>
                        {label && <label className='text-md'>{label}</label>}
                        <span className={`input-border flex items-center ${label ? "mt-2.5" : ""}`}>
                            <input
                                type="text"
                                className="w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] focus:outline-none"
                                placeholder={placeholder}
                                autoComplete="off"
                                value={value}
                                onChange={onChange}
                            />
                        </span>
                    </div>
                )}
            />
            <div className='mt-[10px]'>
                {errors[name] && <span className="text-red-500 text-sm">Please Enter {placeholder}</span>}
            </div>
        </>
    );
};

