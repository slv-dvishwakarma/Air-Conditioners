import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { GridBox } from '@/components/GridBox';
import { LanguageSelector } from '@/app/ac/LanguageSelector';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface CopyrightItem {
  label: string;
  language: string[];
}

interface SupportItem {
  label: string;
  title: string;
  url: string;
}

interface ContactItem {
  label: string;
  support: SupportItem[];
}

interface MenuItem {
  name: string;
  link: string;
}


interface MainItem {
  label: string;
  menu: MenuItem[];
}


interface HeaderProps {
  logo: string;
  alt: string;
  footer_item: MainItem[];
  contact: ContactItem;
  copyright: CopyrightItem;
}

export const FooterTemplate: React.FC<HeaderProps> = ({ logo, alt, footer_item, contact, copyright }) => {

  const socialIcon = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/"
    },
    {
      icon: FaXTwitter,
      url: "https://twitter.com/"
    },
    {
      icon: FaLinkedinIn,
      url: "https://in.linkedin.com/"
    },
  ]


  return (
    <>
      <GridBox columns={4} desktop={4} laptop={4} tablet={3} gap={8} className='py-10 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-6 border-b-[#9399A2] border-b border-solid sm:grid'>
        <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={3}>
          <Image
            src={logo}
            alt={alt}
            width={280}
            height={44}
            className='xl:w-[80%] lg:w-[80%] md:w-full w-[55%]'
          />
        </GridBox.GridItem>
        {footer_item.map((item, index) => (
          <GridBox.GridItem key={index} columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={1}>
            <label className='text-[15px] font-semibold text-white'>{item.label}</label>
            <div className='xl:mt-6 lg:mt-6 md:mt-6 mt-3 space-y-3'>
              {item.menu.map((item, index) => (
                <div key={index} className='text-sm text-[#9399A2] '>
                  <Link className='hover:text-accentColor' key={index} href={item.link}>{item.name}</Link>
                </div>
              ))}
            </div>
          </GridBox.GridItem>
        ))}
        <GridBox.GridItem columnMerge={1} colMargeDesktop={1} colMargeLaptop={1} colMargeTablet={1}>
          <label className='text-[15px] font-semibold text-white'>{contact.label}</label>
          <div className='xl:mt-6 lg:mt-6 md:mt-6 mt-3'>
            <ul className='text-sm text-[#9399A2] space-y-3'>
              {contact.support.map((item, index) => (
                <li key={index} className='hover:text-accentColor'>
                  <span className='text-white'>{item.label} : </span>
                  <Link href={item.url}> {item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='social-icon mt-6'>
            <ul className='flex justify-between xl:w-[70%] lg:w-[70%] md:w-[70%] w-[50%] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[15px]  text-white'>
              {socialIcon.map((item, index) => (
                <li className='hover:text-accentColor' key={index}><Link href={item.url} target='_blank'>{<item.icon />}</Link></li>
              ))}
            </ul>
          </div>
        </GridBox.GridItem>
      </GridBox>
       <GridBox columns={2} desktop={2} laptop={2} tablet={1} className='py-5 sm:grid items-center'>
        <GridBox.GridItem columnMerge={1} className='xl:text-left lg:text-left md:text-center text-center'>
          <span className='xl:text-[15px] lg:text-[15px] md:text-[15px] text-[12px] font-medium text-white '>{copyright.label}</span>
        </GridBox.GridItem>
        <GridBox.GridItem className='xl:flex lg:flex xl:justify-end lg:justify-end xl:mt-0 lg:mt-0 md:mt-0 mt-6 md:hidden hidden'>
          <LanguageSelector options={copyright.language} />
        </GridBox.GridItem>
      </GridBox> 
    </>
  )
}
