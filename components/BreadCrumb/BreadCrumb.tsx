import Link from 'next/link';
import React from 'react';

interface BreadCrumbItem {
  label: string;
  link: string;
}

interface BreadCrumbProps {
  breadcrumb: BreadCrumbItem[];
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadcrumb }) => {
  return (
    <div className='breadcrumb px-0 py-5 border-b-[#BBBFBF] border-b border-solid'>
      {breadcrumb.map((item, index) => (
        <span key={index} className={`  ${index === breadcrumb.length - 1 ? "font-semibold" : "text-[#000000b8] text-[15px] font-normal"}`}>
          <Link href={item.link} >{item.label}</Link>
          {index !== breadcrumb.length - 1 && <span className='ml-2 mr-2'>/</span>}
        </span>
      ))}
    </div>
  );
};
