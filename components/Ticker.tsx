'use client'
import React from 'react'

import fetchData from '@/utils/fetchData';

const tickers = [
    {
        ind:1,
        name: 'BTC',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        color: '#f7931b'
    },
    {
        ind:2,
        name:'ETH',
        logo: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png',
        color: '#627eea'

    },
    {
        ind:3,
        name:'SOL',
        logo:'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        color: '#2c899a'

    },
    {
        ind:1,
        name: 'BTC',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        color: '#f7931b'
    },
    {
        ind:2,
        name:'ETH',
        logo: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png',
        color: '#627eea'

    },
    {
        ind:3,
        name:'SOL',
        logo:'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        color: '#2c899a'

    },{
        ind:1,
        name: 'BTC',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        color: '#f7931b'
    },
    
    
];


function Ticker() {
    const crypto = fetchData();

    console.log(crypto);
    
    
  return (
    <>
    {/* add marquee to calss below */}
        <div className="marquee  md:w-[90vw]  lg:w-[72vw] sm:w-[90vw] xs:w-[70vw] rounded-2xl py-5 px-2">
            <span>
                <div style={{display:'flex'}}>
                    {tickers.map((ticker) => {
                            return(
                                <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                    <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                        <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                        <h1>{ticker.name}</h1>
                                    </div>
                                    <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                        price
                                    </div>
                                </div>
                            )
                        })  
                    }
                </div>
            </span>
        </div>
    </>
  )
}



export default Ticker