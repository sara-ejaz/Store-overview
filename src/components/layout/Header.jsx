// src/components/layout/Header.jsx
import { useState } from 'react';

export default function Header({ onToggleSidebar }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white border-b border-zinc-200 px-5 sm:px-6 py-4.5 flex items-center justify-between">
      {/* Left: Mobile menu + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger - visible only on mobile */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-zinc-800 rounded-xl hover:bg-zinc-100 transition-colors"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        <div>
          <h1 className="text-2xl sm:text-2.5xl font-semibold tracking-tight text-zinc-900">
            Store Overview
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base mt-0.5">
            Welcome back, here’s what’s happening today.
          </p>
        </div>
      </div>

      {/* Right: Search + Notification */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search input */}
        <div className="relative hidden sm:block w-72 lg:w-80">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search orders, SKU..."
            className="
              w-full bg-zinc-50 border border-zinc-200 
              focus:border-blue-300 focus:bg-white focus:ring-1 focus:ring-blue-200
              h-11 pl-11 pr-4 rounded-3xl text-sm 
              outline-none transition-all duration-200
              placeholder:text-zinc-400
            "
          />
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg pointer-events-none"></i>
        </div>

        {/* Notification bell */}
        <div className="relative cursor-pointer group">
          <button
            className="
              w-10 h-10 flex items-center justify-center 
              bg-zinc-50 hover:bg-zinc-100 
              text-zinc-600 hover:text-zinc-800 
              rounded-2xl transition-colors duration-150
            "
            aria-label="Notifications"
          >
            <i className="fa-solid fa-bell text-xl"></i>
          </button>

          {/* Notification badge */}
          <div className="
            absolute -top-1 -right-1 
            min-w-[18px] h-[18px] 
            bg-red-500 text-white 
            text-[10px] font-bold 
            rounded-full flex items-center justify-center 
            px-1 ring-2 ring-white shadow-sm
          ">
            3
          </div>
        </div>

        {/* Mobile-only search icon (optional) */}
        <button
          className="sm:hidden w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-zinc-800 rounded-xl hover:bg-zinc-100 transition-colors"
          aria-label="Search"
        >
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </div>
    </header>
  );
}