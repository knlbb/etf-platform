import React, { useState } from 'react'


export default function Withdraw() {

  return (
    <div className='flex justify-center'>
    <div className='lg:w-96 sm:w-96 xs:w-80 p-5 overflow-hidden items-center flex flex-col bg-white rounded-2xl shadow-md'>
      <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md py-2 text-sm font-semibold text-gray-900 border px-3 hover:text-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
        USDT
        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
      
      <div className='w-full'>
        <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Deposit Address:</h1>
        <input className='w-full rounded-xl mt-2 h-12 border p-5 outline-none'  placeholder='Enter amount'/>
      </div>
      <div className='w-full'>
        <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Deposit Amount:</h1>
        <input className='w-full rounded-xl mt-2 h-12 border p-5 outline-none'  placeholder='Enter amount'/>
        <h1 className='text-xs ml-2 mt-1 font-semibold text-[#42434c]'>Available Amount: 100,000 USDT</h1>
      </div>
      <div className='w-full'>
        <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Password:</h1>
        <input className='w-full rounded-xl mt-2 h-12 border p-5 outline-none' type='password' placeholder='Enter password'/>
      </div>
      <div className='w-full'>
        <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Processing Fee: <a className='text-[#42434c]'>2%</a></h1>
      </div>
      
      <button className='w-full bg-black text-white rounded-xl p-3 mt-5 hover:bg-opacity-80'>Submit</button>
    </div>
  </div>
  )
}
