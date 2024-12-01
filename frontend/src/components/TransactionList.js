import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from backend
    axios.get('http://localhost:5000/api/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className="transaction-item">
              <span className="name">{transaction.name}</span>
              <span className="amount">${transaction.amount}</span>
              <span className="date">{transaction.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;