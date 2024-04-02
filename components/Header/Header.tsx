import React from 'react'
import { GridBox } from '../GridBox'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from '../SearchBar';
import { IoIosCart } from "react-icons/io";
import { LanguageSelector } from '../LanguageSelector';
import { User } from '../User';



interface SearchBarItem {
  name: string;
  placeholder: string;
  key: string;
}

interface HeaderProps {
  logo: string;
  alt: string;
  cart: number;
  options: string[];
  searchbar: SearchBarItem;
  option: string[];
  language: string[];
}

export const Header: React.FC<HeaderProps> = ({ logo, alt, searchbar, option, language, cart, options }) => {
  return (
    <GridBox columns={12} gap={10} className='items-center py-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6'>
      <GridBox.GridItem columnMerge={3} className='flex justify-between items-center gap-[50px]'>
        <Link href="/">
          <Image
            className='w-[96%]'
            src={logo}
            alt={alt}
            width={280}
            height={44}
          />
        </Link>
        <LanguageSelector options={language} />
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={6}>
        <SearchBar searchbar={searchbar} option={option} />
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={3} className='flex xl:justify-arround lg:justify-arround md:justify-arround justify-between items-center gap-[50px]'>
        <User options={options} />
        <div className='relative'>
          <span className='text-white text-3xl'>
            <IoIosCart />
          </span>
          <span className='absolute top-[-13px] bg-accentColor text-[white] w-5 h-5 leading-5 text-center rounded-[50%] right-[20px] text-xs'>
            {cart}
          </span>
        </div>
      </GridBox.GridItem>
    </GridBox>
  )
}
