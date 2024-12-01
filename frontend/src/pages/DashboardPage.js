import React from 'react';
import Charts from '../components/Chart';

function DashboardPage() {
  const sampleLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const sampleData = [500, 800, 400, 900, 650];

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="charts-container">
        <Charts data={sampleData} labels={sampleLabels} />
      </div>
    </div>
  );
}

export default DashboardPage;