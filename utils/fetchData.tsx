import React, { useCallback, useEffect, useState } from 'react'

function fetchData() {
    const [crypto,setCrypto] = useState();
    const fetchCrypto = useCallback(async () => {
      try{
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT"]')
        const data = await response.json();

        setCrypto(data.lastPrice)
        console.log(data.lastPrice);
        

      } catch (err){
        console.log(err);
        
      } 
    }, [crypto]);

    useEffect(() => {
        const interval = setInterval(fetchCrypto, 5000);
        return () => clearInterval(interval)
    }, [fetchCrypto])

    console.log('gg', crypto);
    
  return (
    crypto
  )
}

export default fetchData