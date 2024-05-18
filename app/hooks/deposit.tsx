import { useEffect } from 'react';

function Deposit() {
  useEffect(() => {
    async function depositMoney() {
      try {
        const depositData = {
          userId: 'user_id',
          amount: 100, 
          currency: 'USDT', 
          txId: 'transaction_id' 
        };

        const response = await fetch(`${process.env.URL}/deposit/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(depositData)
        });

        if (!response.ok) {
          throw new Error('Failed to deposit money');
        }

        console.log('Money deposited successfully');
      } catch (error) {
        console.error('Error depositing money:', error);
      }
    }

    depositMoney();
  }, []);
}

export default Deposit;
