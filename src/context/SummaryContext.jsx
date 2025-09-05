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

// import React, { createContext, useState, useContext } from "react";
// import { extractNameAndXD, calculatePortfolio, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";

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
//           // Sort by date
//           const sorted = txns.sort(
//             (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
//           );

//           // ✅ Delegate math to utils
//           const { cumulativeUnits, cumulativeCost, avgCost } =
//             calculatePortfolio(symbol, sorted);

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
//               yieldOnCost: calculateYieldOnCost(data.closingPrice, avgCost),
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

// import React, { createContext, useState, useContext } from "react";
// import { extractNameAndXD, calculatePortfolio, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";

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
//       let summaryData = await Promise.all(
//         Object.entries(stockGroups).map(async ([symbol, txns]) => {
//           // Sort by date
//           const sorted = txns.sort(
//             (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
//           );

//           // ✅ Delegate math to utils
//           const { cumulativeUnits, cumulativeCost, avgCost } =
//             calculatePortfolio(symbol, sorted);

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
//               yieldOnCost: calculateYieldOnCost(data.closingPrice, avgCost),
//               portfolioPercent: 0, // will update next
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
//               yieldOnCost: null,
//               portfolioPercent: 0,
//               rawJson: {},
//             };
//           }
//         })
//       );

//       // ✅ Calculate Portfolio % based on cumulativeCost
//       const totalInvested = summaryData.reduce(
//         (sum, item) => sum + (item.cumulativeCost || 0),
//         0
//       );

//       summaryData = summaryData.map((item) => ({
//         ...item,
//         portfolioPercent:
//           totalInvested > 0
//             ? (item.cumulativeCost / totalInvested) * 100
//             : 0,
//       }));

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
// import { extractNameAndXD, calculatePortfolio, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";

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
//       let summaryData = await Promise.all(
//         Object.entries(stockGroups).map(async ([symbol, txns]) => {
//           const sorted = txns.sort(
//             (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
//           );

//           const { cumulativeUnits, cumulativeCost, avgCost } = calculatePortfolio(symbol, sorted);

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
//               shares: cumulativeUnits,
//               cumulativeCost,
//               avgCost,
//               lastPrice: data.closingPrice,
//               changeValue: data.changeValue,
//               changePercent: data.changePercent,
//               yieldOnCost: calculateYieldOnCost(data.closingPrice, avgCost),
//               portfolioPercent: 0, // will calculate next
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
//               yieldOnCost: null,
//               portfolioPercent: 0,
//               rawJson: {},
//             };
//           }
//         })
//       );

//       // Calculate Portfolio % based on cumulativeCost
//       const totalInvested = summaryData.reduce((sum, item) => sum + (item.cumulativeCost || 0), 0);
//       summaryData = summaryData.map((item) => ({
//         ...item,
//         portfolioPercent: totalInvested > 0 ? (item.cumulativeCost / totalInvested) * 100 : 0,
//       }));

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
import { extractNameAndXD, calculatePortfolio, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";

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
      let summaryData = await Promise.all(
        Object.entries(stockGroups).map(async ([symbol, txns]) => {
          const sorted = txns.sort(
            (a, b) => new Date(a.Date || a.date) - new Date(b.Date || b.date)
          );

          // Portfolio state (unrealized)
          const { cumulativeUnits, cumulativeCost, avgCost } = calculatePortfolio(symbol, sorted);

          // ✅ Calculate realized PnL (FIFO)
          let realizedPnL = 0;
          let buyQueue = []; // store { units, price }

          sorted.forEach((txn) => {
            const type = (txn.Type || txn.type || "").toLowerCase();
            const units = Number(txn["Number of Units"] || txn.units || 0);
            const price = Number(txn["Price per Share"] || txn.pricePerShare || 0);
            const fees = Number(txn.fees) || 0;

            if (type === "buy") {
              buyQueue.push({ units, price });
            } else if (type === "sell") {
              let unitsToSell = units;
              while (unitsToSell > 0 && buyQueue.length > 0) {
                const batch = buyQueue[0];
                const sellQty = Math.min(unitsToSell, batch.units);
                realizedPnL += (price - batch.price) * sellQty - fees;

                batch.units -= sellQty;
                unitsToSell -= sellQty;

                if (batch.units === 0) {
                  buyQueue.shift();
                }
              }
            }
          });

          try {
            const response = await fetch(`http://localhost:3001/api/stock-info/${symbol}`);
            const data = await response.json();
            const { name, xdxb } = extractNameAndXD(data.name);

            return {
              stockTicker: symbol,
              investmentCategory: "Equity",
              name,
              xdxb,
              industry: data.industry || "",
              shares: cumulativeUnits,
              cumulativeCost,
              avgCost,
              lastPrice: data.closingPrice,
              changeValue: data.changeValue,
              changePercent: data.changePercent,
              yieldOnCost: calculateYieldOnCost(data.closingPrice, avgCost),
              portfolioPercent: 0, // will calculate later
              realizedPnL, // ✅ FIFO realized PnL
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
              yieldOnCost: null,
              portfolioPercent: 0,
              realizedPnL,
              rawJson: {},
            };
          }
        })
      );

      // Calculate Portfolio % based on cumulativeCost
      const totalInvested = summaryData.reduce((sum, item) => sum + (item.cumulativeCost || 0), 0);
      summaryData = summaryData.map((item) => ({
        ...item,
        portfolioPercent: totalInvested > 0 ? (item.cumulativeCost / totalInvested) * 100 : 0,
      }));

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
