import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function GainLossChart({ summaries }) {
  const chartData = summaries.map((item) => {
    const lastPrice = parseFloat(item.lastPrice) || 0;
    const avgCost = parseFloat(item.avgCost) || 0;
    const shares = parseFloat(item.shares) || 0;
    const unrealized = (lastPrice - avgCost) * shares;

    return {
      name: item.stockTicker || item.name,
      unrealized: parseFloat(unrealized.toFixed(2)),
    };
  });

  if (!chartData.length) return <p>No data for Gain/Loss</p>;

  return (
    <div className="chart-container">
      <h3 className="chart-title">Unrealized Gain/Loss (PKR)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip formatter={(val) => `Rs. ${val}`} />
          <Legend />
          <Bar dataKey="unrealized" name="Unrealized P/L">
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.unrealized >= 0 ? "#4CAF50" : "#F44336"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
