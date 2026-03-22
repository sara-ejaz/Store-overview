// src/components/dashboard/WeeklySalesChart.jsx
export default function WeeklySalesChart({ className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-3xl p-7 border border-zinc-100
        shadow-[0_10px_15px_-3px_rgb(0,0,0,0.05),0_4px_6px_-4px_rgb(0,0,0,0.05)]
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-xl tracking-tight">
            Weekly Sales Trend
          </h3>
          <p className="text-zinc-400 text-sm uppercase tracking-wider mt-0.5">
            Revenue Analysis
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-100 px-5 py-2.5 rounded-3xl text-sm font-medium text-zinc-700 cursor-pointer hover:bg-zinc-200 transition-colors">
          Last 7 Days
          <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-80 w-full mt-4">
        <svg
          viewBox="0 0 700 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Gradient definition for area fill */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Area fill */}
          <path
            d="
              M 40,240
              Q 110,210 180,220
              Q 250,160 320,110
              Q 390,180 460,210
              Q 530,90  600,70
              L 600,280
              L 40,280
              Z"
            fill="url(#areaGradient)"
          />

          {/* Main line */}
          <path
            d="
              M 40,240
              Q 110,210 180,220
              Q 250,160 320,110
              Q 390,180 460,210
              Q 530,90  600,70"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data point circles */}
          <circle cx="40"  cy="240" r="7" fill="white" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="180" cy="220" r="7" fill="white" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="320" cy="110" r="7" fill="white" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="600" cy="70"  r="7" fill="white" stroke="#3b82f6" strokeWidth="3" />

          {/* X-axis labels */}
          <text x="35"  y="295" fontSize="13" fill="#64748b" fontWeight="500">Mon</text>
          <text x="110" y="295" fontSize="13" fill="#64748b" fontWeight="500">Tue</text>
          <text x="180" y="295" fontSize="13" fill="#64748b" fontWeight="500">Wed</text>
          <text x="250" y="295" fontSize="13" fill="#64748b" fontWeight="500">Thu</text>
          <text x="320" y="295" fontSize="13" fill="#64748b" fontWeight="500">Fri</text>
          <text x="390" y="295" fontSize="13" fill="#64748b" fontWeight="500">Sat</text>
          <text x="460" y="295" fontSize="13" fill="#64748b" fontWeight="500">Sun</text>
        </svg>
      </div>
    </div>
  );
}