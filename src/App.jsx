import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import SalesChart from './components/SalesChart';
import InventoryAlerts from './components/InventoryAlerts';
import RecentTransactions from './components/RecentTransactions';

function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <StatCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <InventoryAlerts />
              </div>
            </div>
            
            <RecentTransactions />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;