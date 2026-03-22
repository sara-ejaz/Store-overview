// src/components/dashboard/StatsGrid.jsx
import StatCard from './StatCard';

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        iconClass="fa-dollar-sign"
        label="Today's Sales"
        value="$1,240.50"
        change="+12.5%"
      />
      <StatCard
        iconClass="fa-coins"
        label="Total Revenue"
        value="$45,280.00"
        change="+5.2%"
      />
      <StatCard
        iconClass="fa-bag-shopping"
        label="Active Orders"
        value="12"
        change="-2.1%"
      />
      <StatCard
        iconClass="fa-triangle-exclamation"
        label="Low Stock Items"
        value="8"
        alert={true}
      />
    </div>
  );
}