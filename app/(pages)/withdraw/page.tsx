'use client'

import React, { useState} from 'react'
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


export default function Withdraw() {

  const { t } = useTranslation('common');


  const [drop, setDrop] = useState(false)
  const [currency, setCurrency] = useState('USDT')

  function handleDropdown(){
    console.log(drop);
    setDrop(!drop)
  }

  const handleCurrencyChange = (e: React.MouseEvent<HTMLButtonElement>) => {
      setCurrency(e.currentTarget.textContent!)
      setDrop(!drop)
  }

  return (
    <div className='flex justify-center'>
    <div className='lg:w-96 sm:w-96 xs:w-80 p-5 overflow-hidden items-center flex flex-col bg-white rounded-2xl shadow-md'>
    <button onClick={handleDropdown} type="button" className="inline-flex justify-center items-center gap-x-1.5 w-1/4 rounded-md py-2 text-sm font-semibold text-gray-900 border px-3 hover:text-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {currency}
            <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png" alt="" className='w-4' />
          </button>
        {drop ? (
          <div className={"mt-10 justify-center gap-x-1.5  w-auto rounded-md py-2 text-sm font-semibold bg-white shadow-md absolute p-4 text-gray-900 border px-3" }>
            <button onClick={handleCurrencyChange} className='hover:text-gray-300  justify-center items-center w-full py-4 '>
              BTC
            </button>
            <button onClick={handleCurrencyChange} className='hover:text-gray-300 justify-center items-center w-full py-4 '>
              USDC
            </button>
            <button onClick={handleCurrencyChange} className='hover:text-gray-300 justify-center items-center w-full py-4 '>
              ETH
            </button>
            <button onClick={handleCurrencyChange} className='hover:text-gray-300 justify-center items-center w-full py-4 '>
              SOL
            </button>
          </div>

        ):(<></>)}
      
      <div className='w-full'>
        <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>{t('DepositAddress')}:</h1>
        <input className='w-full rounded-xl mt-2 h-12 border p-5 outline-none'  placeholder='Enter amount'/>
      </div>
      {/* <Link href="/withdraw" locale="en">English</Link> */}
      {/* <Link href="/withdraw" locale="fr">Français</Link> */}
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
