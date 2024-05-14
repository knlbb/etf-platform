"use client";

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';



import { useSelectedLayoutSegment } from 'next/navigation';
import { SIDENAV_ITEMS } from '@/constants';


const Header = () => {
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div className={'sticky inset-x-0 top-0 z-30 w-full transition-all border-gray-200'}>
      <div className='flex h-24 items-center justify-center px-4'>
        <div className='flex  items-center space-x-4'>
          {/* <Link href='/' className='flex flex-row space-x-3 items-center justify-center md:hidden'>
            <span className='h-7 w-7 bg-zinc-300 rounded-lg'></span>
            <i className='h-7 w-7 bg-zinc-300 rounded-lg cursor-pointer'>
                <img src="https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972" alt="" className='rounded-lg'  style={{height:'100%', aspectRatio:1 }}/>
            </i>
            <span className='font-bold text-xl flex'>Logo</span>
          </Link> */}
          <img src='https://play-lh.googleusercontent.com/Fh6qQqnzTc1PctcLekAHWG2WqnzCFbAwGYEdA48rVdwAso5Ws4CCe54IUylGEb-F8I8' className='w-12 rounded-2xl absolute left-12 h-12'/>

          <div className='hidden flex-row space-x-3 sm:hidden lg:flex md:flex items-center text-center justify-center '>
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>

          {/* <Link href='/' className='flex flex-row space-x-3 items-center justify-center '>
            <h1>Dashboard</h1>
          </Link>
          
          <Link href='/' className='flex flex-row space-x-3 items-center justify-center '>
            <h1>ETF</h1>
          </Link>
          
          <Link href='/' className='flex flex-row space-x-3 items-center justify-center '>
            <h1>Activity</h1>
          </Link>
          
          <Link href='/' className='flex flex-row space-x-3 items-center justify-center '>
            <h1>Deposit</h1>
          </Link>
          
          <Link href='/' className='flex flex-row space-x-3 items-center justify-center '>
            <h1>Withdrawal</h1>
          </Link> */}
        </div>

        {/* <div className=''>
          <button className='h-8 px-5 rounded-lg cursor-pointer bg-zinc-300 hover:bg-black ease-in transition-all hover:text-white flex items-center justify-center'>
            <span className='font-semibold text-sm'>Log In</span>
          </button>
        </div> */}
          <i className='h-10 w-10 hidden lg:flex hover:text-red-700 rounded-lg  right-12 absolute cursor-pointer'>
              {/* <img src="https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972" alt="" className='rounded-lg'  style={{height:'100%',  }}/> */}
              {/* <Icon icon="mdi:bell-notification-outline" width="24" height="24" color='black' style={{color:'#fff'}} /> */}
              <Icon icon="flowbite:language-outline" width="100%" height="100%" />
              <Icon icon="mingcute:down-fill" width="50%" height="100%" />
          </i>
          <button className='flex items-center justify-center'>

            <i className='h-10 w-10  lg:hidden hover:text-red-700 rounded-lg flex right-12 absolute cursor-pointer'>
                {/* <img src="https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972" alt="" className='rounded-lg'  style={{height:'100%',  }}/> */}
                {/* <Icon icon="mdi:bell-notification-outline" width="24" height="24" color='black' style={{color:'#fff'}} /> */}
                <Icon icon="cil:hamburger-menu" width="80%" height="80%" />
                {/* <Icon icon="mingcute:down-fill" width="50%" height="100%" /> */}
            </i>
          </button>

      </div>
    </div>
  )
}

export default Header

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2  hover:text-[#7583e2] ${
            item.path === pathname ? 'rounded-none font-semibold text-[#7583e2]' : 'text-[#b4b7ce]'
          }`}
        >
          {item.icon}
          <span className="text-md flex">{item.title}</span>
        </Link>
    </div>
  );
};