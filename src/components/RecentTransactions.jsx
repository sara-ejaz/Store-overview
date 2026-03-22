import React from 'react';
import { MoreVertical } from 'lucide-react';

const orders = [
  {
    id: "#ORD-88219",
    item: "Silk Scarf",
    sku: "SS-102",
    customer: "Johnathan",
    category: "Accessories",
    price: "$84.00",
    status: "Completed",
    statusColor: "text-emerald-500 bg-emerald-50"
  },
  {
    id: "#ORD-88218",
    item: "Cotton T-Shirt",
    sku: "CT-304",
    customer: "Sarah Jenkins",
    category: "Men's Apparel",
    price: "$45.00",
    status: "Pending",
    statusColor: "text-amber-500 bg-amber-50"
  },
  {
    id: "#ORD-88217",
    item: "Leather Belt",
    sku: "LB-992",
    customer: "Michael Ross",
    category: "Accessories",
    price: "$65.00",
    status: "Completed",
    statusColor: "text-emerald-500 bg-emerald-50"
  },
  {
    id: "#ORD-88216",
    item: "Winter Coat",
    sku: "WC-551",
    customer: "Emma Watson",
    category: "Women's Apparel",
    price: "$210.00",
    status: "Cancelled",
    statusColor: "text-rose-500 bg-rose-50"
  }
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
      <div className="flex justify-between items-center p-6 border-b border-slate-50">
        <div>
          <h3 className="text-xl font-bold text-slate-800 leading-tight">Recent Transactions</h3>
          <p className="text-sm text-slate-500 mt-1">Real-time purchase logs from POS terminals</p>
        </div>
        <button className="text-sm font-semibold text-[#2ebff0] hover:text-[#1da1d0] transition-colors">
          Export CSV
        </button>
      </div>
      
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-100 text-xs text-slate-400 uppercase tracking-widest font-semibold bg-slate-50/50">
              <th className="px-6 py-4 font-semibold">Order ID</th>
              <th className="px-6 py-4 font-semibold">Items / SKU</th>
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-sm text-slate-800">{order.id}</td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-slate-800">{order.item}</div>
                  <div className="text-xs text-slate-400">SKU: {order.sku}</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{order.customer}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">
                    {order.category}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-sm text-slate-800">{order.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${order.status === 'Completed' ? 'bg-emerald-500' : order.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'}`}></span>
                    <span className={`text-xs font-bold ${order.statusColor.split(' ')[0]}`}>
                      {order.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors inline-block">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
