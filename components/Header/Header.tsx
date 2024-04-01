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
  searchbar: SearchBarItem;
  option: string[];
  language: string[];
}

export const Header: React.FC<HeaderProps> = ({ logo, alt, searchbar, option, language }) => {
  return (
    <GridBox columns={12} gap={10} className='items-center py-2.5'>
      <GridBox.GridItem columnMerge={2}>
        <Link href="/">
          <Image
            className='h-8 xl:h-14 lg:h-14 md:h-9 w-[96%]'
            src={logo}
            alt={alt}
            width={311}
            height={74}
          />
        </Link>
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={1}>
        <LanguageSelector options={language} />
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={6}>
        <SearchBar searchbar={searchbar} option={option} />
      </GridBox.GridItem>

      <GridBox.GridItem columnMerge={2}>
        <User />
      </GridBox.GridItem>
      <GridBox.GridItem columnMerge={1} >
        <span className='text-white text-3xl flex justify-center'>
        <IoIosCart />
        </span>
      
      </GridBox.GridItem>
    </GridBox>
  )
}
