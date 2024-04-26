"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SVGIcon } from '@/components/Icons';
import { Popup } from '@/components/Popup';
import { LanguageSelector } from '@/app/shop/LanguageSelector';
import { SearchBar } from '@/app/shop/SearchBar';
import { User } from '@/app/shop/User';


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

export const HeaderTemplate: React.FC<HeaderProps> = ({ logo, alt, searchbar, option, language, cart, options }) => {

  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!open && window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]); 


  const handleOpen = () => {
    setOpen(true);
    setIsSticky(false);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <Popup />
    <header className={`main-header  ${isSticky ? 'shadow-[0_13px_35px_-12px_rgba(35,35,35,0.15)] fixed w-full z-[99] top-0 animate-animateSlideInDown bg-primary w-full px-[4%] md:px-[3%] lg:px-[5%] xl:px-[5%] left-0' : ''}`} style={isSticky ? { animationDuration: ".5s", animationFillMode: "both", animationName: "slideInDown", transform: "translate3d(0, -100%, 0)" } : undefined}>
      <div className='items-center py-5 xl:space-y-0 lg:space-y-0 md:space-y-0  flex gap-5'>
        <div className='xl:w-1/5 lg:w-[25%] md:w-[30%] w-[8%]'>
          <div className='justify-between items-center xl:flex lg:flex md:flex hidden'>
            <Link href="/" className='xl:w-[60%] lg:w-[55%] md:w-[50%] w-full'>
              <Image
                src={logo}
                alt={alt}
                width={280}
                height={44}
              />
            </Link>
            <LanguageSelector options={language} />
          </div>
          <div className='xl:hidden lg:hidden md:hidden'>
            <span className='text-white text-[25px]' onClick={handleOpen}><SVGIcon name="HamburgerMenu"/></span>
          </div>
        </div>
        <div className='xl:w-[62%] lg:w-[50%] md:w-[40%] w-[80%]'>
          <SearchBar searchbar={searchbar} option={option} />
        </div>
        <div className='flex  items-center gap-[18px] justify-between xl:w-[18%] lg:w-[25%] md:w-[30%] w-[15%]'>
          <div className='xl:block lg:block md:block hidden'>
            <User options={options} />
          </div>
          <div className='xl:relative lg:relative md:relative absolute xl:right-0 lg:right-0 md:right-0 right-[35px]'>
            <Link href="/cart">
              <span className='text-white text-3xl'>
                 <SVGIcon name="cart"/>
              </span>
              <span className='absolute top-[-13px] bg-accentColor text-[white] w-5 h-5 leading-5 text-center rounded-[50%] xl:right-[20px] lg:right-[20px] md:right-[20px] right-[-15px] text-xs'>
                {cart}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${open ? "bg-[rgba(0,0,0,0.8)] fixed inset-0 overflow-y-auto z-[999] " : ""}`}>
        <div className={`lg:w-auto lg:order-1 z-50 ${open ? "animate-[slideIn_0.5s_forwards] fixed w-full h-full bg-white transition-[left] duration-[0.3s] ease-[ease] z-[1] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[unset] xl:inset-x-[unset] lg:bg-transparent lg:relative lg:animate-[unset] lg:inset-x-[unset]" : "animate-[slideOut_0.5s_forwards] fixed w-full h-full bg-white transition-[left] duration-[0.3s] ease-[ease] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[unset] xl:inset-x-[unset] lg:bg-transparent lg:relative lg:animate-[unset] lg:inset-x-[unset]"}`}>
          {open && (

            <div>
              <div className='w-4/5 float-right'>
                <div className='bg-primary flex justify-around py-3'>
                  <Link href="/">
                    <Image
                      className='xl:w-[96%] lg:w-[96%] md:w-[50%] w-[200px]'
                      src={logo}
                      alt={alt}
                      width={280}
                      height={44}
                    />
                  </Link>
                  <button className='flex items-center space-x-2 text-accentColor'><span className='text-[14px]'>Sign In</span> <span><SVGIcon name="User" /></span></button>
                </div>
              </div>
              <div className='text-[white] absolute right-[-60px] text-[35px] top-5'>
                <span onClick={handleClose}><SVGIcon name="RxCross2" /></span>
              </div>
              <div className='w-4/5 float-right pt-[30px]'>
                <LanguageSelector options={language} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
    </>
  )
}
