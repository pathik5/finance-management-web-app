import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch accounts from backend
    axios.get('http://localhost:5000/api/accounts')
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  return (
    <div className="accounts-page">
      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <div className="account-item">
              <span className="name">{account.name}</span>
              <span className="type">{account.type}</span>
              <span className="balance">${account.balance}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountsPage;