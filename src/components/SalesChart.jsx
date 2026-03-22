import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Mon', revenue: 1200 },
  { name: 'Tue', revenue: 1350 },
  { name: 'Wed', revenue: 1250 },
  { name: 'Thu', revenue: 2500 },
  { name: 'Fri', revenue: 3800 },
  { name: 'Sat', revenue: 1800 },
  { name: 'Sun', revenue: 4200 },
];

const SalesChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 leading-tight">Weekly Sales Trend</h3>
          <p className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
            Revenue Analysis
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
          Last 7 Days
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2ebff0" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#2ebff0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
              labelStyle={{ color: '#64748b', fontSize: '12px', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#2ebff0" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
