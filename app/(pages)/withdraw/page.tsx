import React from 'react'

export default function Withdraw() {
  return (
    <div className='flex justify-center'>
      <div className='md:w-1/3 sm:w-[90%] p-5 items-center flex flex-col bg-white rounded-2xl shadow-md'>
        <h1 className='font-semibold text-xl mt-5'>Withdraw</h1>
          <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md mt-5 py-2 text-sm font-semibold text-gray-900 border px-3 hover:text-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            USDT
            <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          <div className='w-full mt-5'>
            <h1 className='text-sm m-2 font-semibold text-[#b4b7ce]'>Withdrawal Address:</h1>
            <input className='w-full rounded-xl mt-2 h-12 border p-5'  placeholder='Enter withdrawal address'/>
          </div>
        <div className='w-full'>
          <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Withdrawal Amount:</h1>
          <input className='w-full rounded-xl mt-2 h-12 border p-5'  placeholder='Enter amount'/>
        </div>
        <button className='w-full bg-black text-white rounded-xl p-3 mt-5 hover:bg-opacity-80'>Submit</button>
      </div>
    </div>
  )
}
