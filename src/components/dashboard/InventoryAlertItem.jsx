// src/components/dashboard/InventoryAlertItem.jsx
export default function InventoryAlertItem({
  name,
  sku,
  category,
  stockLeft,
  isCritical = false,     // true → red badge, false → amber badge
  onClick,                // optional: click handler for the whole item
}) {
  // Determine badge styling based on criticality
  const badgeBg = isCritical ? 'bg-red-50' : 'bg-amber-50';
  const badgeText = isCritical ? 'text-red-700' : 'text-amber-700';
  const badgeRing = isCritical ? 'ring-red-100' : 'ring-amber-100';

  return (
    <div
      onClick={onClick}
      className={`
        group flex items-start gap-4 p-4 
        rounded-2xl cursor-pointer
        transition-all duration-150
        hover:bg-zinc-50 active:bg-zinc-100
        ${onClick ? 'hover:shadow-sm' : ''}
      `}
    >
      {/* Product icon / placeholder */}
      <div className="
        w-10 h-10 rounded-2xl bg-zinc-100 
        flex items-center justify-center flex-shrink-0
        group-hover:bg-zinc-200 transition-colors
      ">
        <i className="fa-solid fa-shirt text-xl text-zinc-500"></i>
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="
          font-medium text-zinc-900 truncate 
          group-hover:text-zinc-950 transition-colors
        ">
          {name}
        </div>
        <div className="text-xs text-zinc-500 mt-0.5">
          SKU: {sku}
        </div>
        <div className="text-xs text-zinc-600 mt-1">
          {category}
        </div>
      </div>

      {/* Stock status badge */}
      <div className="flex-shrink-0 text-right">
        <span className={`
          inline-flex items-center px-3.5 py-1.5 
          text-xs font-semibold rounded-full
          ${badgeBg} ${badgeText} ring-1 ${badgeRing}
        `}>
          {stockLeft} Left
        </span>
      </div>
    </div>
  );
}