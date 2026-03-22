// src/components/dashboard/RecentTransactions.jsx
import TransactionTable from './TransactionTable';

export default function RecentTransactions({ className = '' }) {
  return (
    <div
      className={`
        bg-white rounded-3xl border border-zinc-100 
        shadow-[0_10px_15px_-3px_rgb(0,0,0,0.05),0_4px_6px_-4px_rgb(0,0,0,0.05)]
        overflow-hidden
        ${className}
      `}
    >
      {/* Header Section */}
      <div className="px-6 sm:px-7 pt-7 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100">
        <div>
          <h3 className="font-semibold text-xl tracking-tight text-zinc-900">
            Recent Transactions
          </h3>
          <p className="text-zinc-500 text-sm mt-1.5">
            Real-time purchase logs from POS terminals
          </p>
        </div>

        <button
          onClick={() => alert('Exporting CSV... (demo action)')}
          className="
            flex items-center justify-center gap-2.5
            px-5 sm:px-6 py-3
            bg-white border border-zinc-300 hover:border-zinc-400
            text-zinc-700 hover:text-zinc-900
            text-sm font-medium rounded-3xl
            transition-all duration-200
            hover:shadow-sm active:scale-[0.98]
          "
        >
          <i className="fa-solid fa-file-csv text-base"></i>
          Export CSV
        </button>
      </div>

      {/* Table Content */}
      <TransactionTable />
    </div>
  );
}