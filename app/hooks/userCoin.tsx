import React, { useEffect, useState } from 'react';

function UserCoin() {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    async function fetchBalances() {
      try {
        const response = await fetch('/usercoins/spotBalances', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBalances(data);
        } else {
          console.error('Failed to fetch balances');
        }
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    }

    fetchBalances();
    
    async function fetchTotalSpotBalanceUsd() {
        try {
            const response = await fetch('/usercoins/forestadmin/totalSpotBalanceUsd', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            });
            if (response.ok) {
            const data = await response.json();
            console.log('Total Spot Balance USD:', data);
            } else {
            console.error('Failed to fetch total spot balance USD');
            }
        } catch (error) {
            console.error('Error fetching total spot balance USD:', error);
        }
    }
    
    fetchTotalSpotBalanceUsd();
      


    async function payCommission() {
        const payload = { userId: 'user_id_here', amount: 100, symbol: 'BTC' };
        try {
            const response = await fetch('http://your-nestjs-backend/usercoins/forestadmin/payCommission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            });
            if (response.ok) {
            console.log('Commission paid successfully');
            } else {
            console.error('Failed to pay commission');
            }
        } catch (error) {
            console.error('Error paying commission:', error);
        }
    }
      
    payCommission();

  }, []);

}

export default UserCoin;

  