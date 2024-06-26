"use client"
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";


interface DropdownProps {
  options: string[];
}

export const LanguageSelector: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log('Selected option:', option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedLanguageAbbreviation = selectedOption.split(' - ')[1];

  return (

    <div className="relative text-left dropdown-styling flex justify-center" ref={dropdownRef} onClick={toggleDropdown}>
      <Image
        className='w-[30px] mr-3'
        src="/flag.jpg"
        alt=""
        width={300}
        height={158}
      />
      <span className="rounded-md shadow-sm text-white relative">
        <button
          type="button"
          className="flex items-center rounded-md text-sm font-medium text-theme-primary border border-solid border-[#00000042] w-[40px]"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>
            {selectedLanguageAbbreviation}
          </span>
          <span className='absolute text-xl right-0'><IoIosArrowDown /></span>
        </button>
      </span>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 xl:left-0 lg:left-0 md:left-0 top-7 w-[150px] z-[1] left-[-82px]"
          role="listbox"
          aria-labelledby="options-menu"
        >
          <div tabIndex={-1} role="list" aria-label="Dropdown Options">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionChange(option)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <span className="font-normal block truncate">{option}</span>
                </div>

                {selectedOption === option && (
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
                    aria-hidden="true"
                  >
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
};


