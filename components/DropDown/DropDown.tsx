"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";



interface DropdownProps {
  options: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const defaultOption = "Account & List"; // Set the default option here
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
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
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left dropdown-styling" ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm ">
          <button
            type="button"
            className="flex items-center rounded-md  text-sm font-medium text-theme-primary border border-solid border-[#00000042] xl:w-[150px] lg:w-[150px] md:w-[150px] w-full mt-[-7px]"
            id="options-menu"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            onClick={toggleDropdown}
          >
            <span>
              {selectedOption}
            </span>
            {!isOpen ? (
              <span className='text-[22px] ml-5 -mt-5'><MdOutlineKeyboardArrowDown /></span>
            ) : (
              <span className='text-[22px] ml-5 -mt-5'><MdOutlineKeyboardArrowUp /></span>
            )}
          </button>
        </span>
      </div>

      {isOpen && (
        <div tabIndex={-1} role="list" aria-label="Dropdown Options"
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-0 z-[1] overflow-hidden"
        >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionChange(option)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              >
                <div className="flex items-center">

                  <span className="font-normal block truncate text-black">{option}</span>
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
      )}
    </div>
  );
};
