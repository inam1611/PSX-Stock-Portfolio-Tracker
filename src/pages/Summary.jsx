// import React, { useState, useEffect } from "react";
// import SummaryTable from "../tables/SummaryTable";

// function Summary() {
//   const [summaries, setSummaries] = useState([]);

//   const fetchTransactions = async () => {
//     try {
//       const rows = await window.electronAPI.readTransactions();

//       // Extract unique stock symbols
//       const symbols = rows
//         .map(txn => (txn["Stock Symbol"] || "").toUpperCase().trim())
//         .filter(symbol => symbol !== "");

//       const uniqueSymbols = [...new Set(symbols)];

//       // Fetch stock info from local API for each ticker
//       const summaryData = await Promise.all(
//         uniqueSymbols.map(async (symbol) => {
//           try {
//             const response = await fetch(`http://localhost:3001/api/stock-info/${symbol}`);
//             const data = await response.json();
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity", // placeholder
//               name: data.name || "",         // API returned name
//               xdxb: "",                      // placeholder
//               industry: data.industry || "", // API returned industry
//               portfolioPercent: 0            // placeholder
//             };
//           } catch (err) {
//             console.error(`❌ Error fetching stock info for ${symbol}:`, err);
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name: "",
//               xdxb: "",
//               industry: "",
//               portfolioPercent: 0
//             };
//           }
//         })
//       );

//       setSummaries(summaryData);
//     } catch (err) {
//       console.error("❌ Failed to fetch transactions:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   return (
//     <div className="summary-page">
//       <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Summary</h1>
//       <SummaryTable summaries={summaries} />
//     </div>
//   );
// }

// export default Summary;

// import React, { useState, useEffect } from "react";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import { styled } from "@mui/material/styles";
// import clsx from "clsx";
// import SummaryTable from "../tables/SummaryTable";
// import "../styles/SummaryTable.css";

// // Styled refresh icon with spin animation
// const RefreshIcon = styled(AutorenewIcon)(({ theme }) => ({
//   cursor: "pointer",
//   marginLeft: "1rem",
//   "&.spin": {
//     animation: "spin 1s linear",
//     pointerEvents: "none",
//   },
//   "@keyframes spin": {
//     "0%": { transform: "rotate(0deg)" },
//     "100%": { transform: "rotate(360deg)" },
//   },
// }));

// function Summary() {
//   const [summaries, setSummaries] = useState([]);
//   const [spinning, setSpinning] = useState(false);

//   const fetchTransactions = async () => {
//     try {
//       setSpinning(true);

//       const rows = await window.electronAPI.readTransactions();

//       // Extract unique stock symbols
//       const symbols = rows
//         .map((txn) => (txn["Stock Symbol"] || "").toUpperCase().trim())
//         .filter((symbol) => symbol !== "");

//       const uniqueSymbols = [...new Set(symbols)];

//       // Fetch stock info for each ticker
//       const summaryData = await Promise.all(
//         uniqueSymbols.map(async (symbol) => {
//           try {
//             const response = await fetch(
//               `http://localhost:3001/api/stock-info/${symbol}`
//             );
//             const data = await response.json();
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name: data.name || "",
//               xdxb: "",
//               industry: data.industry || "",
//               portfolioPercent: 0,
//             };
//           } catch (err) {
//             console.error(`❌ Error fetching stock info for ${symbol}:`, err);
//             return {
//               stockTicker: symbol,
//               investmentCategory: "Equity",
//               name: "",
//               xdxb: "",
//               industry: "",
//               portfolioPercent: 0,
//             };
//           }
//         })
//       );

//       setSummaries(summaryData);
//     } catch (err) {
//       console.error("❌ Failed to fetch transactions:", err);
//     } finally {
//       // stop spin after 1 second
//       setTimeout(() => setSpinning(false), 1000);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   return (
//     <div className="summary-page">
//       <div className="summary-header">
//         <h1 className="summary-title">Summary</h1>
//         <RefreshIcon
//           className={clsx({ spin: spinning })}
//           onClick={fetchTransactions}
//           fontSize="medium"
//           titleAccess="Refresh"
//         />
//       </div>

//       <SummaryTable summaries={summaries} />
//     </div>
//   );
// }

// export default Summary;


import React, { useEffect, useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import SummaryTable from "../tables/SummaryTable";
import { useSummary } from "../context/SummaryContext";
import "../styles/SummaryTable.css";

// Styled refresh icon with spin animation
const RefreshIcon = styled(AutorenewIcon)(({ theme }) => ({
  cursor: "pointer",
  marginLeft: "1rem",
  "&.spin": {
    animation: "spin 1s linear",
    pointerEvents: "none",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

function Summary() {
  const { summaries, fetchTransactions } = useSummary();
  const [spinning, setSpinning] = useState(false);

  const handleRefresh = async () => {
    setSpinning(true);
    await fetchTransactions();
    setTimeout(() => setSpinning(false), 1000);
  };

  // Fetch only once when summaries are empty
  useEffect(() => {
    if (summaries.length === 0) {
      fetchTransactions();
    }
  }, []);

  return (
    <div className="summary-page">
      <div className="summary-header">
        <h1 className="summary-title">Summary</h1>
        <RefreshIcon
          className={clsx({ spin: spinning })}
          onClick={handleRefresh}
          fontSize="medium"
          titleAccess="Refresh"
        />
      </div>

      <SummaryTable summaries={summaries} />
    </div>
  );
}

export default Summary;
