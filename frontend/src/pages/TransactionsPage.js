import React from 'react';

function TransactionsPage() {
  const transactions = [
    { id: 1, name: 'Netflix', amount: 15, date: '2024-11-01' },
    { id: 2, name: 'Spotify', amount: 10, date: '2024-11-05' },
  ];

  return (
    <div className="transactions-page">
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.name} - ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionsPage;