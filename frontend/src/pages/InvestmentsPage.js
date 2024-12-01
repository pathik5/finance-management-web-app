import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InvestmentsPage() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    // Fetch investments from backend
    axios.get('http://localhost:5000/api/investments')
      .then((response) => {
        setInvestments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching investments:', error);
      });
  }, []);

  return (
    <div className="investments-page">
      <h1>Investments</h1>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            <div className="investment-item">
              <span className="name">{investment.name}</span>
              <span className="value">${investment.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestmentsPage;