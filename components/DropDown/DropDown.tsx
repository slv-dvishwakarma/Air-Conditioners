import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

interface DropdownProps {
  options: string[];
  control: any;
  name: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, control, name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0]} 
      rules={{ required: true }} 
      render={({ field: { onChange, value } }) => (
        <div className="relative text-left dropdown-styling">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-theme-primary border-2 border-solid border-[#B297FF] w-[150px]"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                onClick={toggleDropdown}
              >
                <SlLocationPin className='float-left mr-2' />
                <span>{value}</span>
                <span className='absolute text-xl right-2.5'><IoIosArrowDown /></span>
              </button>
            </span>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-0 z-[1]"
              role="listbox"
            >
              <div tabIndex={-1} role="list" aria-label="Dropdown Options">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
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
  );
};
