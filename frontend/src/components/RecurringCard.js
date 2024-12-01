import React from 'react';

function RecurringCard({ recurring }) {
  return (
    <div className="recurring-card">
      <h3>{recurring.name}</h3>
      <p>Amount: ${recurring.amount}</p>
      <p>Frequency: {recurring.frequency}</p>
      <p>Next Payment: {recurring.nextPayment}</p>
    </div>
  );
}

export default RecurringCard;