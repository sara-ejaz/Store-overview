// src/components/dashboard/StatCard.jsx
export default function StatCard({
  iconClass,
  label,
  value,
  change,
  changeColor = "emerald", // emerald | red | amber
  alert = false,
}) {
  const isPositive = change?.startsWith("+");
  const color = alert ? "amber" : changeColor;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-[0_10px_15px_-3px_rgb(0,0,0,0.05)] border border-zinc-100 hover:-translate-y-0.5 transition-transform">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-blue-100 rounded-3xl flex items-center justify-center">
          <i className={`fa-solid ${iconClass} text-3xl text-blue-600`} />
        </div>

        {alert ? (
          <div className="bg-amber-100 text-amber-600 text-xs font-semibold px-3 py-1 rounded-3xl">
            Low Alert
          </div>
        ) : (
          <div
            className={`text-xs font-semibold px-3 py-1 rounded-3xl flex items-center gap-1 ${
              isPositive
                ? "bg-emerald-100 text-emerald-600"
                : "bg-red-100 text-red-500"
            }`}
          >
            <i
              className={`fa-solid ${
                isPositive ? "fa-arrow-trend-up" : "fa-arrow-trend-down"
              } text-xs`}
            />
            {change}
          </div>
        )}
      </div>

      <div className="mt-8">
        <div className="text-zinc-400 text-sm font-medium tracking-widest uppercase">
          {label}
        </div>
        <div className="text-5xl font-semibold tracking-tighter mt-1">
          {value}
        </div>
      </div>
    </div>
  );
}