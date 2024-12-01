import React, { useEffect, useState } from 'react';
import Charts from '../components/Charts';
import axios from 'axios';

function CashFlowPage() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cashflow')
      .then((response) => {
        const { income, expenses, months } = response.data;
        setIncomeData(income);
        setExpenseData(expenses);
        setLabels(months);
      })
      .catch((error) => {
        console.error('Error fetching cashflow data:', error);
      });
  }, []);

  return (
    <div className="cashflow-page">
      <h1>Cash Flow</h1>
      <div className="chart-section">
        <h2>Income</h2>
        <Charts data={incomeData} labels={labels} />
      </div>
      <div className="chart-section">
        <h2>Expenses</h2>
        <Charts data={expenseData} labels={labels} />
      </div>
    </div>
  );
}

export default CashFlowPage;