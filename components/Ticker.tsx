import React from 'react'

const tickers = [
    {
        ind:1,
        name: 'BTC',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
    },
    {
        ind:2,
        name:'ETH',
        logo: 'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png'
    },
    {
        ind:3,
        name:'SOL',
        logo:'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png'
    }
];


function Ticker() {
    
  return (
    <>
        <div className="marquee">
            <span>
                <div style={{display:'flex'}}>
                    {tickers.map((ticker) => {
                            return(
                                <div key={ticker.ind} style={{height:100, aspectRatio:2, borderWidth:1, borderColor: 'rgba(0,0,0,0.1)', borderRadius:20, padding:10, margin:10}}>
                                    <div style={{width:'100%', height:30,  alignItems:'center', display:'flex',marginTop:10}}>
                                        <img src={ticker.logo} alt="ticker-symbol"  style={{height:30, float: 'left', aspectRatio:1, margin: 10, }}/>
                                        <h1>{ticker.name}</h1>
                                    </div>
                                    <div>
                                        Proce
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