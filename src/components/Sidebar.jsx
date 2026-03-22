import React from 'react';
import { LayoutDashboard, MonitorSmartphone, Shirt, Package, BarChart3, Settings, LogOut, Store } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: MonitorSmartphone, label: 'POS Terminal' },
    { icon: Shirt, label: 'Products' },
    { icon: Package, label: 'Inventory' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-full  md:flex shrink-0">
      {/* Logo Section */}
      <div className="p-6 pb-8 border-b border-transparent">
        <div className="flex items-center gap-3">
          <div className="bg-[#2ebff0] text-white p-2 rounded-lg shrink-0">
            <Store className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-800 leading-tight">ClothPOS</span>
            <span className="text-xs text-slate-400 font-medium">Admin Console</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${
              item.active 
                ? 'bg-[#eef8fe] text-[#2ebff0]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-sm">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
              <span className="opacity-80">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-slate-800 leading-tight">Alex Carter</span>
              <span className="text-xs text-slate-400">Store Manager</span>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 p-2">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
