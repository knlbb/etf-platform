'use client'

import React, { useEffect, useState } from 'react'

export default function Deposit() {
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

  const handleCopy = () => {
    const addressElement = document.getElementById('address');
    if (addressElement) {
      const addressText = addressElement.textContent;
      if (addressText) {
        navigator.clipboard.writeText(addressText)
          .then(() => {
            setIsVisible(true);
            console.log('Text copied to clipboard:', addressText);
          })
          .catch(err => {
            console.error('Failed to copy text:', err);
          });
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isVisible]);

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

        <div className='w-1/2'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" className='w-full'/>
        </div>
        <div className='bg-gray-200 w-full rounded-xl py-5 px-2'>
          <div className='w-full'>
            <h1 className='text-sm m-2 font-semibold text-[#b4b7ce]'>Deposit Address</h1>
            <div className='flex items-center relative'>
              <h2 id="address" className='text-sm m-2 break-words w-3/4 font-bold text-[#484953]'>0x856E918222c3B6b06209554b13Ec86b8e825BC24</h2>
              <button onClick={handleCopy} className='w-5 h-5 right-2 absolute'>
                <img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="" className=''/>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Deposit Amount:</h1>
          <input className='w-full rounded-xl mt-2 h-12 border p-5'  placeholder='Enter amount'/>
        </div>
        <div className='w-full'>
          <h1 className='text-sm mt-5 ml-2 font-semibold text-[#b4b7ce]'>Proof of complete transfer:</h1>
          <div className='w-full h-12 border-2 border-dashed mt-2 rounded-xl cursor-pointer items-center flex px-2'>

          <img src='https://static.vecteezy.com/system/resources/previews/004/968/473/original/upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg'
            className='w-8 h-8'
            />
          <h1 className='text-xs text-gray-400'>Upload Proof of deposit</h1>
          </div>
        </div>
        <button className='w-full bg-black text-white rounded-xl p-3 mt-5 hover:bg-opacity-80'>Submit</button>
      </div>

      {isVisible &&
        <div className='lg:w-96 sm:w-96 xs:w-80 h-12 absolute bottom-10 rounded-xl justify-center items-center align-middle text-[#ffffff] flex opacity-80 bg-[#c78282]'>
          Text Copied!
        </div>
      }
      
    </div>

  )
}
