import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import RecurringPage from './pages/RecurringPage';

import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/recurring" element={<RecurringPage />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/cashflow" element={<CashFlowPage />} />
            <Route path="/investments" element={<InvestmentsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;