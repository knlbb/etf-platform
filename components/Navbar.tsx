import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    // const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0  flex flex-col bg-gray-900 text-white shadow-lg z-20 p-2'>
        <Link href="/">
            <i className='h-12 w-12 group mt-2 mb-2 mx-auto shadow-lg relative flex items-center justify-center bg-gray-800 text-green-500  hover:text-white rounded-xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                <img src="https://media.istockphoto.com/id/942837050/vector/abstract-infinity-block-chain-cube-element-concept-square-purple-gradient-color-vector.jpg?s=612x612&w=0&k=20&c=wr-XLWplKcy-bOPLX3-4Rxdwkb_nxBmlEJWG3hbQBts=" alt="" className='rounded-xl'  style={{height:'100%', float: 'left', aspectRatio:1, margin: 10 }}/>
            </i>
        </Link>

        <div className='border-t-2 md:hidden border-gray-800'>
            {/* <i className='h-12 w-12 group mt-2 mb-2 mx-auto shadow-lg relative flex items-center justify-center bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'> */}
            <Link href="/news">
                <i className='h-12 w-12 group mt-2 mb-2 mx-auto  relative flex items-center justify-center  text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                    1
                    <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text_white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                        Page 1
                    </span>
                </i>
            </Link>
            <i className='h-12 w-12 group mt-2 mb-2 mx-auto  relative flex items-center justify-center  text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                2
                <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text_white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Page 2
                </span>
            </i>
            <i className='h-12 w-12 group mt-2 mb-2 mx-auto  relative flex items-center justify-center  text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                3
                <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text_white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                    Page 3
                </span>
            </i>
            <i className='h-12 w-12 group mt-2 mb-2 mx-auto  relative flex items-center justify-center  text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer'>
                4
                <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text_white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                    Page 4
                </span>
            </i>
        </div>

    </div>
  )
}

export default Navbar
