import { useEffect, useState } from 'react';

function Withdraw() {
    async function withdrawFunds(user: any, withdrawalData: any) {
        try {
          const response = await fetch(`${process.env.URL}/withdraw`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: user,
              withdrawal: withdrawalData,
            }),
          });
          if (response.ok) {
            console.log('Withdrawal successful');
          } else {
            console.error('Failed to withdraw funds');
          }
        } catch (error) {
          console.error('Error withdrawing funds:', error);
        }
      }
      
      // Example usage:
      const user: any = { /* user data */ };
      const withdrawalData: any = { /* withdrawal data */ };
      withdrawFunds(user, withdrawalData);
      
      

      async function validateWithdrawal(withdrawalId: string) {
        try {
          const response = await fetch(`${process.env.URL}/withdraw/forestadmin/validate`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: withdrawalId }),
          });
          if (response.ok) {
            console.log('Withdrawal validated successfully');
          } else {
            console.error('Failed to validate withdrawal');
          }
        } catch (error) {
          console.error('Error validating withdrawal:', error);
        }
      }
      
      const withdrawalId: string = 'withdrawal_id_here';
      validateWithdrawal(withdrawalId);
      

      async function rejectWithdrawal(withdrawalId: string) {
        try {
          const response = await fetch(`${process.env.URL}/withdraw/forestadmin/reject`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: withdrawalId }),
          });
          if (response.ok) {
            console.log('Withdrawal rejected successfully');
          } else {
            console.error('Failed to reject withdrawal');
          }
        } catch (error) {
          console.error('Error rejecting withdrawal:', error);
        }
      }
      
      rejectWithdrawal(withdrawalId);
}

export default Withdraw;