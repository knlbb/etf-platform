import { useEffect, useState } from 'react';

function GetCoins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch('/coins/forestadmin/list');
        if (!response.ok) {
          throw new Error('Failed to fetch coins');
        }
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    }

    fetchCoins();
  }, []);

  return coins
}

export default GetCoins;