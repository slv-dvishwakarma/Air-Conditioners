import React, { useState } from 'react'
import { Controller, Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';

interface CheckboxItem {
    label: string;
    name: string;
}

interface UPIItem {
    label: string;
    placeholder: string;
    name: string;
    guide_text: string;
}

interface AccountItem {
    placeholder: string;
    name: string;
}

interface AccountProps {
    checkbox?: CheckboxItem;
    account?: AccountItem;
    ifsc?: AccountItem;
    button: string;
    upi?: UPIItem;
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
}

export const AccountForm: React.FC<AccountProps> = ({ checkbox, account, ifsc, button, upi, control, errors }) => {

    return (
        <div className='pl-9'>
            {checkbox && (
                <Controller
                    name={checkbox.name}
                    control={control}
                    rules={{ required: false }}
                    render={({ field: { onChange, value = [] } }) => (
                        <div className='checkbox-options pt-[16px] flex items-center flex-wrap gap-10'>
                            <label className='gap-2 flex items-center'>
                                <input
                                    id={checkbox.name}
                                    type="checkbox"
                                    value={value}
                                    onChange={onChange}
                                    className='checkbox-color-setting w-[24px] h-[24px] border border-solid border-[#BEBEBE] hover:border hover:border-solid hover:border-[#BEBEBE] rounded active:border-solid active:border active:border-[#BEBEBE] focus-removed-css'
                                />
                                <span className='text-sm font-normal leading-[21px] text-[#2E2E2E]'>{checkbox.label}</span>
                            </label>
                        </div>
                    )}
                />
            )}
            {account && (
                <Controller
                    name={account.name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value = [] } }) => (
                        <div className='pt-[16px] flex items-center flex-wrap gap-10'>
                            <input
                                id={account.name}
                                type="text"
                                value={value}
                                onChange={onChange}
                                placeholder={account.placeholder}
                                className='w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] focus:outline-none'
                            />
                        </div>
                    )}
                />
            )}
            {errors[account?.name || ""] && <span className="text-red-500 text-sm">This field is required.</span>}

            {ifsc && (
                <Controller
                    name={ifsc.name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value = [] } }) => (
                        <div className='checkbox-options pt-[16px] flex items-center flex-wrap gap-10'>
                            <input
                                id={ifsc.name}
                                type="text"
                                value={value}
                                onChange={onChange}
                                placeholder={ifsc.placeholder}
                                className='w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] focus:outline-none'
                            />
                        </div>
                    )}
                />
            )}
            {errors[ifsc?.name || ""] && <span className="text-red-500 text-sm">This field is required.</span>}
            {upi && (
                <Controller
                    name={upi.name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value = [] } }) => (
                        <div className='checkbox-options pt-[16px]'>
                            <label className='text-sm font-normal leading-[21px] text-[#2E2E2E]'>{upi.label}</label>
                            <input
                                id={upi.name}
                                type="text"
                                value={value}
                                onChange={onChange}
                                placeholder={upi.placeholder}
                                className='w-full text-sm leading-normal text-[#495057] bg-white bg-clip-padding border  px-3 py-1.5 border-solid border-[#ced4da] h-[50px] rounded-[10px] placeholder:text-[15px] focus:outline-none'
                            />
                            <span className='text-xs font-normal leading-[21px]'>{upi.guide_text}</span>
                        </div>
                    )}
                />
            )}
            {errors[upi?.name || ""] && <span className="text-red-500 text-sm">This field is required.</span>}

            {/* <div className='pt-[24px] pb-[24px]'>
                <button type='button' className={`text-[white] text-sm font-medium leading-[16.24px] px-[57px] py-3 rounded-md ${verify === "Verified" ? "bg-[#319F43]" : "bg-accentColor"}`}>{verify}</button>
            </div> */}
        </div>
    )
}
