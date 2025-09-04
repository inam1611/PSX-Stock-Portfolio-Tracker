// import React, { createContext, useState, useContext } from "react";
// import { extractNameAndXD } from "../utils/SummaryUtils.jsx";

// const SummaryContext = createContext();

// export const SummaryProvider = ({ children }) => {
//   const [summaries, setSummaries] = useState([]);

//   const fetchTransactions = async () => {
//     try {
//       const rows = await window.electronAPI.readTransactions();

//       // Group transactions by stock symbol
//       const stockGroups = {};
//       rows.forEach((txn) => {
//         const symbol = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase().trim();
//         if (!symbol) return;
//         if (!stockGroups[symbol]) stockGroups[symbol] = [];
//         stockGroups[symbol].push(txn);
//       });

//       // Prepare summary data
//       const summaryData = await Promise.all(
//         Object.entries(stockGroups).map(async ([symbol, txns]) => {
//           // Sort transactions by date ascending
//           const sorted = txns.sort((a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date));

//           // Calculate latest cumulative units
//           let cumulativeUnits = 0;
//           sorted.forEach((txn) => {
//             const type = txn.Type || txn.type;
//             const units = Number(txn["Number of Units"] || txn.units || 0);
//             if (type === "Buy") cumulativeUnits += units;
//             else if (type === "Sell") cumulativeUnits -= units;
//             // Dividends do not affect cumulative units
//           });

//           // Fetch stock info
//           try {
//             const response = await fetch(`http://localhost:3001/api/stock-info/${symbol}`);
//             const data = await response.json();

//             const { name, xdxb } = extractNameAndXD(data.name);

//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name,
//               xdxb,
//               industry: data.industry || "",
//               shares: cumulativeUnits, // ✅ latest cumulative units
//               lastPrice: data.closingPrice,
//               changeValue: data.changeValue,
//               changePercent: data.changePercent,
//               portfolioPercent: 0,
//               rawJson: data,
//             };
//           } catch (err) {
//             console.error(`❌ Error fetching stock info for ${symbol}:`, err);
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name: "",
//               xdxb: "",
//               industry: "",
//               shares: cumulativeUnits, // still include latest units even if API fails
//               lastPrice: null,
//               changeValue: null,
//               changePercent: "",
//               portfolioPercent: 0,
//               rawJson: {},
//             };
//           }
//         })
//       );

//       setSummaries(summaryData);
//     } catch (err) {
//       console.error("❌ Failed to fetch transactions:", err);
//     }
//   };

//   return (
//     <SummaryContext.Provider value={{ summaries, fetchTransactions }}>
//       {children}
//     </SummaryContext.Provider>
//   );
// };

// export const useSummary = () => useContext(SummaryContext);

// import React, { createContext, useState, useContext } from "react";
// import { extractNameAndXD } from "../utils/SummaryUtils.jsx";

// const SummaryContext = createContext();

// export const SummaryProvider = ({ children }) => {
//   const [summaries, setSummaries] = useState([]);

//   const fetchTransactions = async () => {
//     try {
//       const rows = await window.electronAPI.readTransactions();

//       // Group transactions by stock symbol
//       const stockGroups = {};
//       rows.forEach((txn) => {
//         const symbol = (txn["Stock Symbol"] || txn.stockName || "")
//           .toUpperCase()
//           .trim();
//         if (!symbol) return;
//         if (!stockGroups[symbol]) stockGroups[symbol] = [];
//         stockGroups[symbol].push(txn);
//       });

//       // Prepare summary data
//       const summaryData = await Promise.all(
//         Object.entries(stockGroups).map(async ([symbol, txns]) => {
//           // Sort transactions by date ascending
//           const sorted = txns.sort(
//             (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
//           );

//           // Portfolio dict values
//           let cumulativeUnits = 0;
//           let cumulativeCost = 0;

//           sorted.forEach((txn) => {
//             const type = txn.Type || txn.type;
//             const units = Number(txn["Number of Units"] || txn.units || 0);
//             const pricePerShare = Number(
//               (txn["Price per Share"] || txn.pricePerShare || "0")
//                 .toString()
//                 .replace(/[^\d.-]/g, "")
//             );
//             const netValue = units * pricePerShare;

//             console.log("🔎 Txn detail:", symbol, {
//               type,
//               units,
//               pricePerShare,
//               netValue,
//             });

//             if (type === "Buy") {
//               cumulativeUnits += units;
//               cumulativeCost += netValue;
//             } else if (type === "Sell") {
//               cumulativeUnits -= units;
//               cumulativeCost -= netValue;
//             }
//           });



//           const avgCost =
//             cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;

//           // 🟢 Debug log
//           console.log("📊 Portfolio calc:", symbol, {
//             cumulativeUnits,
//             cumulativeCost,
//             avgCost,
//           });

//           // Fetch stock info
//           try {
//             const response = await fetch(
//               `http://localhost:3001/api/stock-info/${symbol}`
//             );
//             const data = await response.json();

//             const { name, xdxb } = extractNameAndXD(data.name);

//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name,
//               xdxb,
//               industry: data.industry || "",
//               shares: cumulativeUnits,
//               cumulativeCost,
//               avgCost,
//               lastPrice: data.closingPrice,
//               changeValue: data.changeValue,
//               changePercent: data.changePercent,
//               portfolioPercent: 0,
//               rawJson: data,
//             };
//           } catch (err) {
//             console.error(`❌ Error fetching stock info for ${symbol}:`, err);
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name: "",
//               xdxb: "",
//               industry: "",
//               shares: cumulativeUnits,
//               cumulativeCost,
//               avgCost,
//               lastPrice: null,
//               changeValue: null,
//               changePercent: "",
//               portfolioPercent: 0,
//               rawJson: {},
//             };
//           }
//         })
//       );

//       setSummaries(summaryData);
//     } catch (err) {
//       console.error("❌ Failed to fetch transactions:", err);
//     }
//   };

//   return (
//     <SummaryContext.Provider value={{ summaries, fetchTransactions }}>
//       {children}
//     </SummaryContext.Provider>
//   );
// };

// export const useSummary = () => useContext(SummaryContext);

import React, { createContext, useState, useContext } from "react";
import { extractNameAndXD } from "../utils/SummaryUtils.jsx";

const SummaryContext = createContext();

export const SummaryProvider = ({ children }) => {
  const [summaries, setSummaries] = useState([]);

  const fetchTransactions = async () => {
    try {
      const rows = await window.electronAPI.readTransactions();
      // Group transactions by stock symbol
      const stockGroups = {};
      rows.forEach((txn) => {
        const symbol = (txn["Stock Symbol"] || txn.stockName || "")
          .toUpperCase()
          .trim();
        if (!symbol) return;
        if (!stockGroups[symbol]) stockGroups[symbol] = [];
        stockGroups[symbol].push(txn);
      });
      // Prepare summary data
      const summaryData = await Promise.all(
        Object.entries(stockGroups).map(async ([symbol, txns]) => {
          // Sort transactions by date ascending
          const sorted = txns.sort(
            (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
          );
          // Portfolio dict values
          let cumulativeUnits = 0;
          let cumulativeCost = 0;
          sorted.forEach((txn) => {
            const type = txn.Type || txn.type;
            const units = Number(txn["Number of Units"] || txn.units || 0);
            const pricePerShare = Number(
              (txn["Price per Share"] || txn.pricePerShare || "0")
                .toString()
                .replace(/[^\d.-]/g, "")
            );
            // --- Fee calculation (same as TransactionUtils) ---
            let fees = 0;
            if (type === "Buy" || type === "Sell") {
              let commission =
                pricePerShare < 20
                  ? units * 0.03
                  : units * pricePerShare * 0.0015;
              const salesTax = commission * 0.15;
              const cdcCharges = units * 0.005;
              fees = commission + salesTax + cdcCharges;
            } else if (type === "Dividend") {
              fees = units * pricePerShare * 0.15;
            }
            // --- Book cost logic ---
            if (type === "Buy") {
              const bookCost = units * pricePerShare + fees;
              cumulativeUnits += units;
              cumulativeCost += bookCost;
            } else if (type === "Sell") {
              const avgCostPerUnit =
                cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;
              cumulativeUnits -= units;
              cumulativeCost -= avgCostPerUnit * units;
            }
            // Dividends ignored for cost/units
            console.log("🔎 Txn detail:", symbol, {
              type,
              units,
              pricePerShare,
              fees,
              cumulativeUnits,
              cumulativeCost,
            });
          });
          const avgCost =
            cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;
          console.log("📊 Portfolio calc:", symbol, {
            cumulativeUnits,
            cumulativeCost,
            avgCost,
          });
          // Fetch stock info
          try {
            const response = await fetch(
              `http://localhost:3001/api/stock-info/${symbol}`
            );
            const data = await response.json();
            const { name, xdxb } = extractNameAndXD(data.name);
            return {
              stockTicker: symbol,
              investmentCategory: "Equity",
              name,
              xdxb,
              industry: data.industry || "",
              shares: cumulativeUnits,
              cumulativeCost, // keep as number
              avgCost, // keep as number
              lastPrice: data.closingPrice,
              changeValue: data.changeValue,
              changePercent: data.changePercent,
              portfolioPercent: 0,
              rawJson: data,
            };
          } catch (err) {
            console.error(`❌ Error fetching stock info for ${symbol}:`, err);
            return {
              stockTicker: symbol,
              investmentCategory: "Equity",
              name: "",
              xdxb: "",
              industry: "",
              shares: cumulativeUnits,
              cumulativeCost,
              avgCost,
              lastPrice: null,
              changeValue: null,
              changePercent: "",
              portfolioPercent: 0,
              rawJson: {},
            };
          }
        })
      );
      setSummaries(summaryData);
    } catch (err) {
      console.error("❌ Failed to fetch transactions:", err);
    }
  };
  return (
    <SummaryContext.Provider value={{ summaries, fetchTransactions }}>
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummary = () => useContext(SummaryContext);
