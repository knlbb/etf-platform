'use client'

import PortfolioChart from '../../../components/chart';

const data = [
  {
    coin: 'BTC',
    percentage: '60'
  },
  {
    coin: 'ETH',
    percentage: '15'
  },
  {
    coin: 'SOL',
    percentage: '13'
  },
  {
    coin: 'USDT',
    percentage: '10'
  },
  {
    coin: 'XRP',
    percentage: '2'
  },

]


export default function Etf() {
  return (
    <div className="flex gap-5">
      <div>
        <div className="w-full h-[20vh] bg-white shadow-md rounded-2xl justify-center relative overflow-hidden flex ">
          <div className="w-full h-full flex absolute justify-center items-center">
            <div className=" w-2/3 h-full z-1 justify-center items-center flex">
              <h1 className="text-white text-3xl font-bold">$50,000</h1>
            </div>
            <div className='w-1/2 h-full'>
              <button className=" w-full h-1/2 border-b z-1 bg-[#ffffff28] hover:bg-[#00000057] justify-center items-center flex">
                <h1 className="text-white lg:text-md md:text-sm text-xs ">Deposit</h1>
              </button>
              <button className=" w-full h-1/2   bg-[#ffffff28] hover:bg-[#00000057]  z-1 justify-center items-center flex">
                <h1 className="text-white lg:text-md md:text-sm text-xs">Withdraw</h1>
              </button>
            </div>
          </div>
            <div className="bg-white w-full ">
              <img src="https://img.freepik.com/premium-photo/black-grainy-gradient-background-abstract-golden-blurred-wave-dark-noise-texture-copy-space_284753-2399.jpg" alt="" className="h-full w-full pointer-events-none"/>
            </div>
        </div>

        <div className="w-full h-[60vh] bg-white shadow-md rounded-2xl relative mt-5 overflow-hidden flex ">
            <div className=" w-full h-full p-5 ">
              <h1 className="text-black text-2xl font-bold mb-5">Percentage:</h1>

              {data.map((item) => {
                return(
                  <div>
                    <h1 className="text-black">{item.coin}: {item.percentage}%</h1>
                    <div className="w-3/4 bg-transparent rounded-full h-1.5 mb-4 flex  dark:bg-gray-700">
                      <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 " style={{width: `${item.percentage}%`}}></div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>

      <div className="w-2/3 bg-white shadow-md rounded-2xl p-5 relative overflow-hidden ">
          <div className="w-full p-5">
            <h1 className="text-black text-2xl font-bold">Portfolio:</h1>
          </div>
          <div className='w-[90%]'>
            <PortfolioChart/>
          </div>
      </div>
    </div>
  );
}

