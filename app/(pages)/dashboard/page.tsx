import React from 'react'
import Ticker from "@/components/Ticker2"
import { redirect } from 'next/navigation'

const etfInfo = [
    {
        key: 1,
        symbol: 'BTC',
        logo: 'https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png',
        coin: 'Bitcoin',
        price:'$62,120.09',
        dayVol: '$123.3 M',
        marketCap: '$4.3 T'
    },
    {
        key:2,
        symbol: 'ETH',
        logo: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png',
        coin: 'Ethereum',
        price:'$62,120.09',
        dayVol: '$123.3 M',
        marketCap: '$4.3 T'
    },
    {
        key:3,
        symbol: 'SOL',
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        coin: 'Solana',
        price:'$62,120.09',
        dayVol: '$123.3 M',
        marketCap: '$4.3 T'
    },
]


function Dashboard() {
  
  if (process.env.LOGGED_IN === "false"){
    redirect('login')
  }
  return (
    <div>
      <div className="w-full  bg-white border rounded-xl">
          <header className="px-5 py-4 ">
              <div>
                <h5 className="text-xs text-[#c5cade]">Sort By:</h5>
                <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md  py-2 text-sm font-semibold text-gray-900  hover:text-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Market Cap
                  <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
          </header>
          <table className="table-auto w-full">
            <thead className="text-xs text-gray-400">
                <tr className="bg-gray-50 border-t h-10">
                    <th className="px-5 whitespace-nowrap">
                        <div className="font-semibold text-left"></div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Symbol</div>
                    </th>
                    <th className="p-2 xs:hidden sm:hidden md:inline whitespace-nowrap">
                        <div className="font-semibold text-left">Coin</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="p-2 xs:hidden whitespace-nowrap">
                        <div className="font-semibold text-left">24h Volume</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Market Cap</div>
                    </th>
                    <th className="p-2 xxs:hidden whitespace-nowrap">
                        <div className="font-semibold text-center">Last 7 days</div>
                    </th>
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
                {etfInfo.map((i)=>{
                    return(
                    <tr className="h-16 border-t">
                        <td className="p-4 whitespace-nowrap w-2">
                            <div className="text-left">{i.key}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={i.logo} width="40" height="40" alt="Alex Shatov"/></div>
                                <div className="font-medium text-gray-800">{i.symbol}</div>
                            </div>
                        </td>
                        <td className="p-2 xs:hidden sm:hidden md:inline whitespace-nowrap">
                            <div className="text-left">{i.coin}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{i.price}</div>
                        </td>
                        <td className="p-2 xs:hidden whitespace-nowrap">
                            <div className="text-left font-medium">{i.dayVol}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium ">{i.marketCap}</div>
                        </td>
                        <td className="p-2 xxs:hidden whitespace-nowrap">
                            <div className="text-lg flex justify-center text-center"><img src="https://miro.medium.com/v2/resize:fit:793/1*sRlmmFjU2hH0e7n4vqF4QA.png" className='w-auto h-12'/></div>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard