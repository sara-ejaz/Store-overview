import React from 'react';
import { Shirt, Check } from 'lucide-react';

const inventoryItems = [
  {
    name: "Linen Summer Shirt",
    sku: "LSS-2024-BL",
    category: "Men's Apparel",
    left: 2,
  },
  {
    name: "Classic Denim Jeans",
    sku: "CDJ-882-IND",
    category: "Bottoms",
    left: 5,
  },
  {
    name: "Floral Midi Dress",
    sku: "FMD-99-YLW",
    category: "Women's Apparel",
    left: 1,
  }
];

const InventoryAlerts = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Inventory Alerts</h3>
      
      <div className="space-y-4 flex-1">
        {inventoryItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all bg-white">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <Shirt className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <p className="font-semibold text-sm text-slate-800 truncate pr-2">{item.name}</p>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-sm font-bold text-rose-500">{item.left} Left</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">{item.category}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 truncate">SKU: {item.sku}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-colors">
        View Full Inventory
      </button>
    </div>
  );
};

export default InventoryAlerts;
