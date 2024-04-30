'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div className="md:min-w-[20%] right-0 bg-[#f2f6fe] h-screen flex-1 fixed hidden md:flex">
      <div className="flex flex-col space-y-6 w-full mx-5">
        <div className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-[#e7ecf5] h-24 w-full">
          {/* <i className='h-7 w-7   rounded-lg cursor-pointer'> */}
              {/* <img src="https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972" alt="" className='rounded-lg'  style={{height:'100%',  }}/> */}
              {/* <Icon icon="mdi:bell-notification-outline" width="24" height="24" color='black' style={{color:'#fff'}} /> */}
              {/* <Icon icon="mdi:bell-notification" width="100%" height="100%" /> */}
          {/* </i> */}
          <span className="text-md text-[#4f588c] right-10 absolute hidden md:flex">email@email.com</span>
        </div>

        {/* <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div> */}
        <div className='bg-white rounded-2xl p-5 flex'>
          <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" className='w-12 h-12'/>
          <div className='ml-5'>
            <h1 className='text-[#c5cade] mt-0 pt-0 font-semibold mb-2 text-xs'>Balance</h1>
            <h1 className='font-bold text-[#525a8e] mt-0 pt-0 text-lg'>1231 ETH</h1>
          </div>
        </div>
      </div>

      <div className='w-12 aspect-square cursor-pointer bg-black p-2 absolute flex right-5 rounded-full bottom-5 justify-center items-center'>
        {/* <img src="https://www.svgrepo.com/show/192522/customer-service-support.svg" alt="" className='rounded-2xl' /> */}
        <Icon icon="bx:support" className='text-white hover:text-red-800' width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Sidebar

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  
    return (
      <div className="">
        {item.submenu ? (
          <>
            <button
              onClick={toggleSubMenu}
              className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
                pathname.includes(item.path) ? 'bg-zinc-100' : ''
              }`}
            >
              <div className="flex flex-row space-x-4 items-center">
                {item.icon}
                <span className="font-semibold text-xl  flex">{item.title}</span>
              </div>
  
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                <Icon icon="lucide:chevron-down" width="24" height="24" />
              </div>
            </button>
  
            {subMenuOpen && (
              <div className="my-2 ml-12 flex flex-col space-y-4">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${
                        subItem.path === pathname ? 'font-bold' : ''
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
              item.path === pathname ? 'bg-zinc-100' : ''
            }`}
          >
            {item.icon}
            <span className="font-semibold text-xl flex">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };