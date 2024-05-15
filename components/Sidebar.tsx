'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

function Sidebar() {
  const [chat, setChat] = useState(false)

  return (
    <div className="lg:min-w-96 md:hidden right-0 bg-[#f2f6fe] h-screen flex-1 fixed hidden lg:flex">
      <div className="flex flex-col space-y-6 w-full mx-5">
        <div className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-[#e7ecf5] h-24 w-full">
          <span className="text-md text-[#4f588c] right-10 absolute hidden md:flex">email@email.com</span>
        </div>

        <div className='bg-white rounded-2xl p-5 flex'>
          <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" className='w-12 h-12'/>
          <div className='ml-5'>
            <h1 className='text-[#c5cade] mt-0 pt-0 font-semibold mb-2 text-xs'>Balance</h1>
            <h1 className='font-bold text-[#525a8e] mt-0 pt-0 text-lg'>1231 ETH</h1>
          </div>
        </div>
      </div>

        
      <button onClick={() => setChat(!chat)} className='w-12 aspect-square cursor-pointer bg-black p-2 absolute flex right-5 rounded-full bottom-5 justify-center items-center'>
        <Icon icon="bx:support" className='text-white hover:text-red-800' width="100%" height="100%" />
      </button>

      <div className={chat ? 'w-[75%] h-[50%] ml-5 rounded-2xl bg-white overflow-hidden bottom-5 absolute' : 'w-[90%] h-[50%] hidden rounded-2xl bg-white overflow-hidden bottom-5 right-5 absolute'}>
        <div className='w-full h-[15%] bg-black px-3 flex items-center'>
          <button onClick={() => setChat(false)} className=' rounded-xl bg-green-600 w-3 h-3'>
            {/* <Icon icon="bx:support" className='text-white hover:text-red-800' width="100%" height="100%" /> */}
          </button>
          <h1 className='m-2 text-white'>
            ChatBot
          </h1>
        </div>
        <div className='p-5'>
          Chat here
        </div>
        <div className='absolute bottom-0 h-[15%] bg-black w-full flex justify-center items-center'>
          <input type="text" placeholder='Enter message here' className='w-[90%] text-white h-10 bg-transparent outline-none'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
