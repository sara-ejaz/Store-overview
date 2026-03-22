// src/components/dashboard/InventoryAlerts.jsx
import InventoryAlertItem from './InventoryAlertItem';

const alertData = [
  {
    name: 'Linen Summer Shirt',
    sku: 'LSS-2024-BL',
    category: "Men's Apparel",
    stockLeft: 2,
    isCritical: true,
  },
  {
    name: 'Classic Denim Jeans',
    sku: 'CDJ-882-IND',
    category: 'Bottoms',
    stockLeft: 5,
    isCritical: false,
  },
  {
    name: 'Floral Midi Dress',
    sku: 'FMD-99-YLW',
    category: "Women's Apparel",
    stockLeft: 1,
    isCritical: true,
  },
];

export default function InventoryAlerts({ className = '' }) {
  return (
    <div
      className={`
        bg-white rounded-3xl p-7 border border-zinc-100
        shadow-[0_10px_15px_-3px_rgb(0,0,0,0.05),0_4px_6px_-4px_rgb(0,0,0,0.05)]
        flex flex-col
        ${className}
      `}
    >
      {/* Header */}
      <h3 className="font-semibold text-xl tracking-tight mb-6">
        Inventory Alerts
      </h3>

      {/* Alert items */}
      <div className="space-y-2 flex-1">
        {alertData.map((item, index) => (
          <InventoryAlertItem
            key={`${item.sku}-${index}`}
            name={item.name}
            sku={item.sku}
            category={item.category}
            stockLeft={item.stockLeft}
            isCritical={item.isCritical}
          />
        ))}
      </div>

      {/* View full inventory button */}
      <button
        className="
          mt-6 bg-zinc-900 hover:bg-black 
          text-white text-sm font-medium 
          py-4 rounded-3xl w-full transition-colors
        "
        onClick={() => alert('Opening full inventory view (demo)')}
      >
        View Full Inventory
      </button>
    </div>
  );
}