import React from 'react';
import { Banknote, Wallet, ShoppingBag, AlertTriangle } from 'lucide-react';

const stats = [
  {
    title: "Today's Sales",
    value: "$1,240.50",
    change: "+12.5%",
    trend: "up",
    icon: Banknote,
    iconBg: "bg-blue-50 text-blue-500",
    badgeColor: "text-emerald-500 bg-emerald-50"
  },
  {
    title: "Total Revenue",
    value: "$45,280.00",
    change: "+5.2%",
    trend: "up",
    icon: Wallet,
    iconBg: "bg-blue-50 text-blue-500",
    badgeColor: "text-emerald-500 bg-emerald-50"
  },
  {
    title: "Active Orders",
    value: "12",
    change: "-2.1%",
    trend: "down",
    icon: ShoppingBag,
    iconBg: "bg-blue-50 text-blue-500",
    badgeColor: "text-rose-500 bg-rose-50"
  },
  {
    title: "Low Stock Items",
    value: "8",
    change: "Low Alert",
    trend: "alert",
    icon: AlertTriangle,
    iconBg: "bg-blue-50 text-blue-500",
    badgeColor: "text-amber-500 bg-amber-50"
  }
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
              <stat.icon className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${stat.badgeColor}`}>
              {stat.change}
            </span>
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
