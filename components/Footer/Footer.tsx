import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { GridBox } from '@/components/GridBox';
import { LanguageSelector } from '@/app/ac/LanguageSelector';

interface CopyRightItem {
  label: string;
  year: number;
  menu: MenuItem[];
}

interface MenuItem {
  name: string;
  link: string;
}

interface KnowItem {
  label: string;
  image: string[];
  menu: MenuItem[];
}

interface MainItem {
  label: string;
  menu: MenuItem[];
}


interface HeaderProps {
  logo: string;
  alt: string;
  know: KnowItem;
  footer_item: MainItem[];
  copyright: CopyRightItem;
  language: string[];
}

export const Footer: React.FC<HeaderProps> = ({ logo, alt, know, footer_item, copyright, language }) => {
  return (
    <>
      <GridBox columns={5} desktop={5} laptop={5} tablet={1} gap={8} className='py-10 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6 border-b-[#9399A2] border-b border-solid'>
        <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={5}>
          <Image
            src={logo}
            alt={alt}
            width={280}
            height={44}
          />
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={2}>
          <label className='text-[15px] font-semibold text-white'>{know.label}</label>
          <div className='mt-6 space-y-3'>
            {know.menu.map((item, index) => (
              <div className='text-sm text-[#9399A2] '>
                <Link className='hover:text-accentColor' key={index} href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className='app-store mt-7 xl:space-y-5 lg:space-y-5 md:space-y-5 space-y-0 xl:block lg:block md:block flex items-center xl:gap-0 lg:gap-0 md:gap-0 gap-7'>
            {know.image.map((item, index) => (
              <Image key={index} className='xl:w-[70%] lg:w-[70%] md:w-[70%] w-[46%] border border-solid border-white rounded-[10px]'
                src={item}
                alt={know.label}
                width={818}
                height={246}
              />
            ))}
          </div>
        </GridBox.GridItem>
        {footer_item.map((item, index) => (
          <GridBox.GridItem key={index} columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={2}>
            <label className='text-[15px] font-semibold text-white'>{item.label}</label>
            <div className='mt-6 space-y-3'>
              {item.menu.map((item, index) => (
                <div className='text-sm text-[#9399A2] '>
                  <Link className='hover:text-accentColor' key={index} href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </GridBox.GridItem>
        ))}
      </GridBox>
      <GridBox columns={2} desktop={2} laptop={2} tablet={1} className='py-5'>
        <GridBox.GridItem columnMerge={1}>
          <div className='xl:flex lg:flex md:flex block items-center xl:gap-10 lg:gap-10 md:gap-10 gap-2 xl:justify-start lg:justify-start md:justify-center justify-start'>
            <div className='text-[15px] text-white'>
              <span>{copyright.label} {copyright.year}</span>
            </div>
            <div className='xl:flex lg:flex md:flex block items-center xl:gap-10 lg:gap-10 md:gap-10 gap-2 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-3 xl:mt-0 lg:mt-0 md:mt-0 mt-6'>
              {copyright.menu.map((item, index) => (
                <div className='text-sm text-[#9399A2] '>
                  <Link className='hover:text-accentColor' key={index} href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </GridBox.GridItem>
        <GridBox.GridItem className='xl:flex lg:flex xl:justify-end lg:justify-end xl:mt-0 lg:mt-0 md:mt-0 mt-6 md:hidden hidden'>
          <LanguageSelector options={language} />
        </GridBox.GridItem>
      </GridBox>
    </>
  )
}
