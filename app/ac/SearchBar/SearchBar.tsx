"use client"
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

interface SearchBarItem {
  name: string;
  placeholder: string;
  key: string;
}

interface SearchBarProps {
  searchbar: SearchBarItem;
  option: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchbar, option }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { handleSubmit, control, formState: { errors }, reset } = useForm();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const filterCityNames = (value: string) => {
    return option.filter(data =>
      data.toLowerCase().startsWith(value.toLowerCase())
    );
  };

  const handlechange = (onChange: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
    setInputValue(value);
    const filteredSuggestions = filterCityNames(value);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedOption(suggestion); // Update selected option
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center w-full relative'>
        <Controller
          control={control}
          name={searchbar.key}
          defaultValue={option[0]}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <div className="relative text-left dropdown-styling xl:block lg:block md:block hidden">
                <span className=" shadow-sm ">
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-primary w-[100px] bg-ternary px-2.5 py-[9px] border-[none] rounded-[5px_0px_0px_5px]"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    onClick={toggleDropdown}
                  >
                    <span>{selectedOption.substring(0, 6)}</span>
                    <span className='absolute text-xl right-2.5'><IoIosArrowDown /></span>
                  </button>
                </span>

              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-0 z-[1] w-[150px]"
                  role="listbox"
                >
                  <div tabIndex={-1} role="list" aria-label="Dropdown Options">
                    {option.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectedOption(option); 
                          onChange(option);
                          toggleDropdown();
                        }}
                        className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <span className="font-normal block truncate">{option}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        />
        <Controller
          name={searchbar.name}
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <input
              type="text"
              className="w-full input-border flex items-center border border-solid border-[#BEBEBE] focus:outline-none focus:shadow-none shadow-none h-[38px] placeholder:text-[#9D9D9D] px-5 rounded-[5px_0px_0px_5px] xl:rounded-[0px_0px_0px_0px] lg:rounded-[0px_0px_0px_0px] md:rounded-[0px_0px_0px_0px]"
              placeholder={searchbar.placeholder}
              autoComplete="off"
              value={inputValue}
              onChange={(e) => {
                handlechange(onChange)(e);
                if (!e.target.value) {
                  setSuggestions([]);
                }
              }}
            />
          )}
        />
        {inputValue && suggestions.length > 0 && (
          <ul className="absolute w-full bg-[white] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_1px_3px_1px] top-[45px] p-2.5 z-[1]">
            {suggestions.map((suggestion, index) => (
              <li className='leading-10' key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
            ))}
          </ul>
        )}
        <button type='submit' className='bg-accentColor h-[38px] w-[38px] text-center items-center flex justify-center p-[11px] rounded-[0px_5px_5px_0px]'><span className='text-white'><FaSearch /></span></button>
      </form>
      <div>
        {errors[searchbar.name] && <span className="text-red-500 text-sm">Please Enter Input</span>}
      </div>

    </>
  );
};
