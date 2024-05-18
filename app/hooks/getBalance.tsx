import { useEffect, useState } from 'react';

function GetBalance() {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    async function fetchBalances() {
      try {
        const response = await fetch('/balances', {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch balances');
        }
        const data = await response.json();
        setBalances(data);
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    }

    fetchBalances();
  }, []);

  return balances
}

export default GetBalance;