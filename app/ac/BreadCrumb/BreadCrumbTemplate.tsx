"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SideBar } from '../SideBar';

interface BreadCrumbItem {
  label: string;
  link: string;
}

interface ColorItem {
  label: string;
  name: string;
  options: string[];
}

interface PriceItem {
  range: number[];
  maxPrice: number;
  label: string;
}


interface BrandItem {
  label: string;
  name: string;
  options: string[];
}

interface BreadCrumbProps {
  breadcrumb: BreadCrumbItem[];
  brand: BrandItem;
  delivery: BrandItem;
  compressor: BrandItem;
  energy: BrandItem;
  coil: BrandItem;
  appliances: BrandItem;
  price: PriceItem;
  color: ColorItem;
}

export const BreadCrumbTemplate: React.FC<BreadCrumbProps> = ({ breadcrumb, brand, delivery, compressor, energy, coil, appliances, price, color }) => {

  const [open, setOpen] = useState(false);

  const handleclicked = () => {
    setOpen(true);
  }

  const handleclose = () => {
    setOpen(false);
  }

  return ( 
    <>
      <div className='border-b-[#BBBFBF] border-b border-solid px-0 py-5 flex justify-between'>
        <div className='breadcrumb '>
          {breadcrumb.map((item, index) => (
            <span key={index} className={`  ${index === breadcrumb.length - 1 ? "font-semibold xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px]" : "text-[#000000b8] xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px] font-normal"}`}>
              <Link href={item.link} >{item.label}</Link>
              {index !== breadcrumb.length - 1 && <span className='ml-2 mr-2'>/</span>}
            </span>
          ))}
        </div>
        <div className='xl:hidden lg:hidden md:block block text-accentColor'>
          <span className='flex items-center gap-2.5' onClick={handleclicked}>Filters <MdOutlineKeyboardArrowDown /></span>
        </div>
      </div>
      {open && (
        <div className={`${open ? 'fixed inset-0 overflow-y-auto z-[999] bg-white' : ''}`}>
          <div className="px-[4%]">
            <div className='flex items-center justify-between px-0 py-5 border-b-[gray] border-b border-solid'>
              <span>Filters</span>
              <span className='w-[30px] h-[30px] bg-accentColor text-[white] flex justify-center text-xl p-[5px] rounded-[50%]' onClick={handleclose}><RxCross2 /></span>
            </div>
            <SideBar brand={brand} delivery={delivery} compressor={compressor} energy={energy} coil={coil} appliances={appliances} price={price} color={color} />
          </div>
        </div>
      )}
    </>
  );
};
