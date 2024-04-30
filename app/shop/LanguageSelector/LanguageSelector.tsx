import { SVGIcon } from '@/components/Icons';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options?: string[];
}

export const LanguageSelector: React.FC<DropdownProps> = ({ }) => {
  const options = ['English - EN', 'हिंदी - HI'];
  const uniqueId = useRef<string | null>(null);

  useEffect(() => {
    uniqueId.current = `dropdown-${Math.floor(Math.random() * 1000000)}`;
  }, []);

  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom');

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

  useEffect(() => {
    const dropdownMenuHeight = dropdownRef.current?.offsetHeight || 0;
    const buttonRect = dropdownRef.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (buttonRect) {
      const spaceAbove = buttonRect.top;
      const spaceBelow = windowHeight - buttonRect.bottom;

      if (spaceBelow < dropdownMenuHeight && spaceAbove > dropdownMenuHeight) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      if (savedLanguage === 'hi') {
        setSelectedOption('हिंदी - HI');
      } else if (savedLanguage === 'en') {
        setSelectedOption('English - EN');
      }
    }
  }, []); 

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (option === 'हिंदी - HI') {
      localStorage.setItem('language', 'hi');
    } else if (option === 'English - EN') {
      localStorage.setItem('language', 'en');
    }

    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedLanguageAbbreviation = selectedOption.split(' - ')[1];

  return (
    <div className="relative text-left dropdown-styling flex justify-center items-center" ref={dropdownRef} onClick={toggleDropdown}>
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
          className="flex items-center rounded-md text-sm font-medium text-theme-primary border border-solid border-[transparent] xl:w-[40px] lg:w-[40px] md:w-[40px] w-full xl:p-0 lg:p-0 md:p-0 p-1 xl:text-white lg:text-white md:text-white text-black"
          id={uniqueId.current!}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className='text-white text-[13px]'>
            {selectedLanguageAbbreviation}
          </span>
          <SVGIcon className='absolute text-xl xl:right-0 lg:right-0 md:right-0 right-[-20px] text-white' name="ArrowDown" />
        </button>
      </span>

      {isOpen && (
        <div
          tabIndex={-1}
          role="list"
          aria-label="Dropdown Options"
          className={`origin-${dropdownPosition}-right absolute ${dropdownPosition === 'top' ? 'bottom-7' : 'top-7'} xl:right-0 lg:right-0 md:right-0 left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 xl:left-0 lg:left-0 md:left-0 left-[-20px] w-[120px] z-[1] overflow-hidden`}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionChange(option)}
              className="cursor-pointer select-none relative p-2  hover:bg-gray-100 "
            >
              <div className="flex items-center">
                <span className="font-normal block truncate">{option}</span>
              </div>

              {selectedOption === option && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600" aria-hidden="true">
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

