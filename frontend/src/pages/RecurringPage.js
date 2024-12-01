import React from 'react';

function RecurringPage() {
  const recurringPayments = [
    { id: 1, name: 'Netflix', amount: 15, frequency: 'Monthly' },
    { id: 2, name: 'Spotify', amount: 10, frequency: 'Monthly' },
  ];

  return (
    <div className="recurring-page">
      <h1>Recurring Payments</h1>
      <ul>
        {recurringPayments.map((payment) => (
          <li key={payment.id}>
            {payment.name} - ${payment.amount} ({payment.frequency})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecurringPage;