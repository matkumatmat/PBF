import React from 'react'
import { HiCube, HiArchive, HiFolderAdd, HiDocumentReport, HiCog, HiLogout, HiChartBar } from "react-icons/hi";

// Define an array of icon objects
const TempIcons = [
    { indeks: 1, name: "Dashboard", type: <HiChartBar className='text-2xl font-bold text-white' /> },
    { indeks: 2, name: "Stock", type: <HiArchive className='text-2xl font-bold text-white' /> },
    { indeks: 3, name: "Packing", type: <HiCube className='text-2xl font-bold text-white' /> },
    { indeks: 4, name: "Dokumentasi", type: <HiFolderAdd className='text-2xl font-bold text-white' /> },
    { indeks: 5, name: "Report", type: <HiDocumentReport className='text-2xl font-bold text-white' /> },
    { indeks: 6, name: "Setting", type: <HiCog className='text-2xl font-bold text-white' /> },
    { indeks: 7, name: "Logout", type: <HiLogout className='text-2xl font-bold text-white' /> }
];

const Mini_icons = () => {
  return (
    <>
        <div className='w-full h-18 rounded-full bg-stone-800/70 flex items-center justify-center'>
            {TempIcons[1].type}
          <div key={icon.indeks} className="flex items-center my-2">
            {icon.type}
            <span className="ml-2 text-white">{icon.name}</span>
          </div>
        </div>
    </>
  )
}

export default Mini_icons;
export { TempIcons };