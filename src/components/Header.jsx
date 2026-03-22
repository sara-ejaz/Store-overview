import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between shrink-0">
      {/* Title block */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-slate-800 leading-tight mb-1">Store Overview</h1>
        <p className="text-sm text-slate-500">Welcome back, here's what's happening today.</p>
      </div>

      {/* Action block */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Search orders, SKU..." 
            className="w-72 bg-slate-50 text-sm text-slate-700 rounded-full pl-11 pr-4 py-2.5 outline-none border border-transparent focus:border-[#2ebff0] focus:bg-white transition-all placeholder:text-slate-400 font-medium"
          />
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
