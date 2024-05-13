'use client'

import React from 'react'

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";


const tickers = [
    {
        ind:1,
        name: 'FUCK YE',
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

    },
    {
        ind:1,
        name: 'BTC',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        color: '#f7931b'
    },
    
    
    
];

const ticker = {
    ind:1,
    name: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    color: '#f7931b'
}

function Ticker2() {
    const _plugins = [new AutoPlay({duration: 0})];
  return (
    <div className="marquee rounded-2xl w-auto overflow-hidden py-5 px-2 ">
        <div style={{display:'flex', overflow:'hidden'}}>
            <div className='  overflow-hidden'>
            <Flicking 
                plugins={_plugins}
                align="prev"
                inputType={["pointer", "touch", "mouse"]}
                circular={true}
                easing={ x => x }
                onMoveEnd={e => {
                    autoInit: true
                }}>
                {/* <div className="panel">1</div>
                <div className="panel">2</div>
                <div className="panel">3</div> */}
                {/* {tickers.map((ticker) => {
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
                } */}
                <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>

                            <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>

                            <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>
                <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>

                            <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>

                            <div key={ticker.ind} style={{height:'8rem', aspectRatio:1.5, backgroundColor:'white', borderRadius:20, marginRight:20}} className='shadow-md'>
                                <div style={{width:'100%', height:'50%',  alignItems:'center', display:'flex'}}>
                                    <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                    <h1>{ticker.name}</h1>
                                </div>
                                <div className='opacity-50 h-[50%] w-full rounded-b-2xl text-white' style={{padding:10, backgroundColor:`${ticker.color}`}}>
                                    price
                                </div>
                            </div>
                
            </Flicking>
            </div>
        </div>
    </div>
  )
}

export default Ticker2