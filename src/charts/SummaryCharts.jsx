import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28CFF",
  "#FF6B6B",
  "#4ECDC4",
  "#F7B801",
];

export default function SummaryCharts({ summaries }) {
  const chartData = summaries.map((item) => ({
    name: item.stockTicker || item.name,
    value: parseFloat(item.portfolioPercent) || 0, // ✅ already percentage
  }));

  if (!chartData.length) return <p>No summary data available</p>;

  return (
    <div className="chart-container">
      <h3 className="chart-title">Portfolio Distribution</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ name, value }) => `${name}: ${value.toFixed(2)}%`} // ✅ format %
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(val) => `${parseFloat(val).toFixed(2)}%`} /> {/* ✅ show % */}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}


