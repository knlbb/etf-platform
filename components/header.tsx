"use client";

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

import { SIDENAV_ITEMS } from '@/constants';

const sidebarHandle = () => {
  // return sidebar
}

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  

  const handleSidebar = () => {
    console.log('lik');
    setSidebar(!sidebar)
    sidebarHandle()
  }

  return (
    <div className={'sticky top-0  w-full transition-all border-gray-200'}>
      <div className='flex h-24 items-center justify-center px-4'>
        <div className='flex  items-center space-x-4'>
          
          <img src='https://play-lh.googleusercontent.com/Fh6qQqnzTc1PctcLekAHWG2WqnzCFbAwGYEdA48rVdwAso5Ws4CCe54IUylGEb-F8I8' className='w-12 rounded-2xl absolute left-12 h-12'/>

          <div className='hidden flex-row space-x-3 sm:hidden lg:flex md:flex items-center text-center justify-center '>
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
        </div>

          <i className='h-10 w-10 hidden lg:flex hover:text-red-700 rounded-lg  right-12 absolute cursor-pointer'>
              <Icon icon="flowbite:language-outline" width="100%" height="100%" />
              <Icon icon="mingcute:down-fill" width="50%" height="100%" />
          </i>
          <button onClick={handleSidebar} className='flex items-center justify-center'>
            <i className='h-10 w-10  lg:hidden hover:text-red-700 rounded-lg flex right-12 absolute cursor-pointer'>
                <Icon icon="cil:hamburger-menu" width="80%" height="80%" />
            </i>
          </button>


      </div>
    </div>
    


  )
}

export default Header


const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

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