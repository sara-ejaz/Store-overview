// src/components/dashboard/TransactionTable.jsx
const sampleTransactions = [
  {
    id: '#ORD-78492',
    item: 'Silk Scarf (SKU: SS-102)',
    customer: 'Johnathan',
    category: 'Accessories',
    price: '$84.00',
    status: 'Completed',
    statusColor: 'emerald',
  },
  {
    id: '#ORD-78491',
    item: 'Classic Denim Jeans (SKU: CDJ-882-IND)',
    customer: 'Sarah Patel',
    category: 'Bottoms',
    price: '$129.00',
    status: 'Completed',
    statusColor: 'emerald',
  },
  {
    id: '#ORD-78490',
    item: 'Floral Midi Dress (SKU: FMD-99-YLW)',
    customer: 'Emma Rodriguez',
    category: "Women's Apparel",
    price: '$79.50',
    status: 'Processing',
    statusColor: 'amber',
  },
  // You can add more rows here or pass as prop
];

export default function TransactionTable() {
  return (
    <div className="bg-white rounded-3xl border border-zinc-100 shadow-[0_10px_15px_-3px_rgb(0,0,0,0.05)] overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-7 pt-6 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-xl tracking-tight">Recent Transactions</h3>
          <p className="text-zinc-500 text-sm mt-1">
            Real-time purchase logs from POS terminals
          </p>
        </div>

        <button
          className="
            flex items-center justify-center gap-2 
            px-5 sm:px-6 py-3 
            border border-zinc-300 hover:border-zinc-400 
            bg-white text-zinc-700 text-sm font-medium 
            rounded-3xl transition-colors
          "
          onClick={() => alert('Exporting CSV... (demo)')}
        >
          <i className="fa-solid fa-file-csv"></i>
          Export CSV
        </button>
      </div>

      {/* Table wrapper - scrollable on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/70">
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Items / SKU
              </th>
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Price
              </th>
              <th className="text-left py-4 px-6 sm:px-7 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                Status
              </th>
              <th className="w-12"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-100">
            {sampleTransactions.map((tx, index) => (
              <tr
                key={tx.id + index}
                className="hover:bg-zinc-50/70 transition-colors duration-150"
              >
                <td className="px-6 sm:px-7 py-5 font-medium text-zinc-900">
                  {tx.id}
                </td>
                <td className="px-6 sm:px-7 py-5 text-zinc-800">
                  {tx.item}
                </td>
                <td className="px-6 sm:px-7 py-5 text-zinc-700">
                  {tx.customer}
                </td>
                <td className="px-6 sm:px-7 py-5 text-zinc-600">
                  {tx.category}
                </td>
                <td className="px-6 sm:px-7 py-5 font-medium text-zinc-900">
                  {tx.price}
                </td>
                <td className="px-6 sm:px-7 py-5">
                  <span
                    className={`
                      inline-flex items-center gap-1.5 
                      px-4 py-1.5 rounded-3xl text-xs font-medium
                      ${
                        tx.statusColor === 'emerald'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }
                    `}
                  >
                    <span
                      className={`
                        w-2 h-2 rounded-full
                        ${tx.statusColor === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'}
                      `}
                    />
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 sm:px-7 py-5 text-center">
                  <button
                    className="text-zinc-400 hover:text-zinc-700 transition-colors"
                    aria-label="More actions"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: empty state or pagination could be added here later */}
    </div>
  );
}