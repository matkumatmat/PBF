import React, { useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Photo_rounded_sm from './photo_rounded_sm';
import { TempIcons } from '../components/mini_icons';

// Komponen untuk header mobile
const MobileHeader = () => (
  <div className="block md:hidden w-full h-[60px] shadow-md/20 fixed top-0 left-0 z-50 bg-white">
    <nav className="w-full h-full">
      <div className="flex items-center justify-between pr-4 h-full bg-primary backdrop-blur-xl">
        <div className='flex items-center w-full h-full py-1'>
          <img src="/biofarma_logo.png" style={{height: 38, width: 80}} alt="Logo" className='bg-contain'/>
        </div>
        <div className='text-white text-lg font-semibold'>
          <HiDotsVertical />
        </div>
      </div>
    </nav>
  </div>
);

// Komponen untuk header desktop/sidebar
const DesktopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='hidden md:block h-screen w-18 fixed top-0 left-0 z-50 my-2 ml-2'>
      <div className='flex flex-col items-center justify-start h-full w-full rounded-full backdrop-blur-xl'>
        <div
          className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl/30 cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <Photo_rounded_sm />
        </div>
        {/* Menu transisi smooth */}
        <div
          className={
            `flex flex-col mt-2 w-full p-2 gap-2 overflow-hidden transition-all duration-300 ` +
            (isOpen
              ? 'max-h-[400px] opacity-100 rounded-full backdrop-blur-xl'
              : 'max-h-0 opacity-0')
          }
        >
          {isOpen && TempIcons.map((icon, idx) => (
            <div key={icon.indeks} className='w-full h-14 hover:h-full rounded-full bg-stone-700 flex items-center justify-center duration-300'>
              {icon.type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen utama yang memanggil keduanya
const Allheader = () => (
  <>
    <MobileHeader />
    <DesktopHeader />
  </>
);

export default Allheader;