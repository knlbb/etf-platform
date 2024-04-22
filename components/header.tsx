"use client";

import React from 'react'
import Link from 'next/link';

import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/lib/utils';

const Header = () => {
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200',{"border-b  bg-white": selectedLayout,})}>
      <div className='flex h-16 items-center justify-between px-4'>
        <div className='flex items-center space-x-4'>
          <Link href='/' className='flex flex-row space-x-3 items-center justify-center md:hidden'>
            {/* <span className='h-7 w-7 bg-zinc-300 rounded-lg'></span> */}
            <i className='h-7 w-7 bg-zinc-300 rounded-lg cursor-pointer'>
                <img src="https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972" alt="" className='rounded-lg'  style={{height:'100%',  }}/>
            </i>
            {/* <span className='font-bold text-xl flex'>Logo</span> */}
          </Link>
        </div>

        <div className=''>
          <button className='h-8 px-5 rounded-lg cursor-pointer bg-zinc-300 hover:bg-black ease-in transition-all hover:text-white flex items-center justify-center'>
            <span className='font-semibold text-sm'>Log In</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header