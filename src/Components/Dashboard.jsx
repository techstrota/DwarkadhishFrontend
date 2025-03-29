import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Logistics Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/lr-generate">LR Generate</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/bank-ledger">Bank Ledger</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;