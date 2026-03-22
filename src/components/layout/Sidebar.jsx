// src/components/layout/Sidebar.jsx
import { useState } from 'react';

const menuItems = [
  { icon: 'fa-grid-2', label: 'Dashboard', isActive: true },
  { icon: 'fa-cash-register', label: 'POS Terminal' },
  { icon: 'fa-shirt', label: 'Products' },
  { icon: 'fa-boxes-stacked', label: 'Inventory' },
  { icon: 'fa-chart-line', label: 'Reports' },
  { icon: 'fa-gear', label: 'Settings' },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className={`
        w-72 bg-white border-r border-zinc-200 
        flex flex-col h-full fixed md:static z-50
        transition-transform duration-300
        -translate-x-full md:translate-x-0
      `}
      id="sidebar"
    >
      {/* Logo + Brand */}
      <div className="px-6 py-8 border-b border-zinc-100 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
          <i className="fa-solid fa-shirt text-white text-2xl"></i>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 font-['Space_Grotesk']">
            ClothPOS
          </h2>
          <p className="text-[10px] text-zinc-400 -mt-1 tracking-[2px] uppercase">
            Admin Console
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`
              w-full flex items-center gap-3.5 px-5 py-3.5 rounded-3xl text-sm font-medium
              transition-all duration-200 sidebar-link
              ${
                activeItem === item.label
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50'
              }
            `}
          >
            <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile (bottom) */}
      <div className="p-6 border-t border-zinc-100 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
            <i className="fa-solid fa-user text-lg"></i>
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">Alex Carter</div>
            <div className="text-zinc-400 text-xs truncate">Store Manager</div>
          </div>

          <button
            className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-2xl transition-colors"
            title="Sign out"
            onClick={() => alert('Logout functionality (demo)')}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </aside>
  );
}