import { useState, useEffect } from 'react';
import { SVGIcon } from '../Icons';
import Image from 'next/image';
import Link from 'next/link';

export const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      setShowPopup(true);
      localStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handlurlClick = () => {
    setShowPopup(false);
  }

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]">
          <div className="flex items-center justify-center min-h-screen">
            <div className='relative xl:w-6/12 lg:w-[70%] md:w-[70%] w-full mx-auto '>
              <button className='absolute xl:right-[-39px] lg:right-[-39px] md:right-[-39px] right-[10px] xl:top-[-20px] lg:top-[-20px] md:top-[-20px] top-[10px] w-[30px] h-[30px] flex justify-center items-center bg-[#00000075] rounded-[50%]' onClick={handleClose}><SVGIcon className="text-[20px] max-h-8 max-w-[32px] min-h-[32px] min-w-[32px] flex justify-center items-center rounded-[50%] text-[white]" name="RxCross2" /></button>
              <div className='rounded-[20px]'>
                <Image src="/Sale-Banner.jpg" alt="sale" width={6912} height={3456}  className='w-full rounded-[20px]'/>
                <div className='absolute xl:left-[21%] lg:left-[21%] md:left-[21%] left-[17%] xl:bottom-[50px] lg:bottom-[50px] md:bottom-[23px] bottom-[10px]'>
                  <Link onClick={handlurlClick} href="/sale" className='bg-accentColor text-[white] xl:px-5 lg:px-5 md:px-5 px-3 xl:py-2.5 lg:py-2.5 md:py-2.5 py-2 rounded-xl'>Buy Now</Link>
                </div>
                <span className='absolute xl:text-[15px] lg:text-[15px] md:text-[15px] text-[13px] text-[#FF8500] font-extrabold xl:left-[21.5%] lg:left-[21.5%] md:left-[21.5%] left-[17.5%] xl:bottom-[87px] lg:bottom-[87px] md:bottom-[63px] bottom-[41px]'>5 Days Left</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

