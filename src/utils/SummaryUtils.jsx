// // src/utils/SummaryUtils.js

// import React from "react";

// export const renderLastPrice = (item) => {
//   const price =
//     item.lastPrice !== null && item.lastPrice !== undefined
//       ? item.lastPrice.toFixed(2)
//       : "-";

//   const changeValue =
//     item.changeValue !== null && item.changeValue !== undefined
//       ? item.changeValue.toFixed(2)
//       : "0.00";

//   const changePercent = item.changePercent || "";

//   // Decide color & arrow
//   const isPositive = parseFloat(item.changeValue) > 0;
//   const isNegative = parseFloat(item.changeValue) < 0;

//   let color = "inherit";
//   let arrow = "";

//   if (isPositive) {
//     color = "green";
//     arrow = "▲";
//   } else if (isNegative) {
//     color = "red";
//     arrow = "▼";
//   }

//   return (
//     <div style={{ color, textAlign: "center", lineHeight: "1.4" }}>
//       <div>Rs. {price}</div>
//       <div>{arrow}</div>
//       <div>
//         {changeValue} {changePercent}
//       </div>
//     </div>
//   );
// };
// src/utils/SummaryUtils.js

// import React from "react";

// /**
//  * Extract clean company name and XD/XB flag from API name field
//  * Example: "Meezan Bank LimitedXD" → { name: "Meezan Bank Limited", xdxb: "XD" }
//  */
// export const extractNameAndXD = (rawName = "") => {
//   if (!rawName) return { name: "", xdxb: "" };

//   const match = rawName.match(/(.*?)(XD|XB)$/i);
//   if (match) {
//     return {
//       name: match[1].trim(),
//       xdxb: match[2].toUpperCase(),
//     };
//   }

//   return { name: rawName.trim(), xdxb: "" };
// };

// /**
//  * Render "Last Price" cell with color + arrow
//  */
// export const renderLastPrice = (item) => {
//   const price =
//     item.lastPrice !== null && item.lastPrice !== undefined
//       ? item.lastPrice.toFixed(2)
//       : "-";

//   const changeValue =
//     item.changeValue !== null && item.changeValue !== undefined
//       ? item.changeValue.toFixed(2)
//       : "0.00";

//   const changePercent = item.changePercent || "";

//   // Decide color & arrow
//   const isPositive = parseFloat(item.changeValue) > 0;
//   const isNegative = parseFloat(item.changeValue) < 0;

//   let color = "inherit";
//   let arrow = "";

//   if (isPositive) {
//     color = "green";
//     arrow = "▲";
//   } else if (isNegative) {
//     color = "red";
//     arrow = "▼";
//   }

//   return (
//     <div style={{ color, textAlign: "center", lineHeight: "1.4" }}>
//       <div>Rs. {price}</div>
//       <div>{arrow}</div>
//       <div>
//         {changeValue} {changePercent}
//       </div>
//     </div>
//   );
// };

// import React from "react";

// /**
//  * Extract clean company name and XD/XB flag from API name field
//  */
// export const extractNameAndXD = (rawName = "") => {
//   if (!rawName) return { name: "", xdxb: "" };

//   const match = rawName.match(/(.*?)(XD|XB)$/i);
//   if (match) {
//     return {
//       name: match[1].trim(),
//       xdxb: match[2].toUpperCase(),
//     };
//   }

//   return { name: rawName.trim(), xdxb: "" };
// };

// /**
//  * Render "Last Price" cell with color + arrow
//  */
// export const renderLastPrice = (item) => {
//   const price =
//     item.lastPrice !== null && item.lastPrice !== undefined
//       ? item.lastPrice.toFixed(2)
//       : "-";

//   const changeValue =
//     item.changeValue !== null && item.changeValue !== undefined
//       ? item.changeValue.toFixed(2)
//       : "0.00";

//   const changePercent = item.changePercent || "";

//   // Decide color & arrow
//   const isPositive = parseFloat(item.changeValue) > 0;
//   const isNegative = parseFloat(item.changeValue) < 0;

//   let color = "inherit";
//   let arrow = "";

//   if (isPositive) {
//     color = "green";
//     arrow = "▲";
//   } else if (isNegative) {
//     color = "red";
//     arrow = "▼";
//   }

//   return (
//     <div style={{ color, textAlign: "center", lineHeight: "1.4" }}>
//       <div>Rs. {price}</div>
//       <div>{arrow}</div>
//       <div>
//         {changeValue} {changePercent}
//       </div>
//     </div>
//   );
// };

// /**
//  * Calculate portfolio stats for a group of transactions
//  */
// export const calculatePortfolio = (symbol, transactions) => {
//   let cumulativeUnits = 0;
//   let cumulativeCost = 0;

//   transactions.forEach((txn) => {
//     const type = txn.Type || txn.type;
//     const units = Number(txn["Number of Units"] || txn.units || 0);
//     const pricePerShare = Number(
//       (txn["Price per Share"] || txn.pricePerShare || "0")
//         .toString()
//         .replace(/[^\d.-]/g, "")
//     );

//     // --- Fee calculation (aligned with TransactionUtils) ---
//     let fees = 0;
//     if (type === "Buy" || type === "Sell") {
//       let commission =
//         pricePerShare < 20 ? units * 0.03 : units * pricePerShare * 0.0015;
//       const salesTax = commission * 0.15;
//       const cdcCharges = units * 0.005;
//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "Dividend") {
//       fees = units * pricePerShare * 0.15;
//     }

//     // --- Book cost logic ---
//     if (type === "Buy") {
//       const bookCost = units * pricePerShare + fees;
//       cumulativeUnits += units;
//       cumulativeCost += bookCost;
//     } else if (type === "Sell") {
//       const avgCostPerUnit =
//         cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;
//       cumulativeUnits -= units;
//       cumulativeCost -= avgCostPerUnit * units;
//     }
//     // Dividends don’t change units or cost

//     console.log("🔎 Txn detail:", symbol, {
//       type,
//       units,
//       pricePerShare,
//       fees,
//       cumulativeUnits,
//       cumulativeCost,
//     });
//   });

//   const avgCost = cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;

//   console.log("📊 Portfolio calc:", symbol, {
//     cumulativeUnits,
//     cumulativeCost,
//     avgCost,
//   });

//   return { cumulativeUnits, cumulativeCost, avgCost };
// };

// /**
//  * Calculate Yield on Cost (%)
//  */
// export const calculateYieldOnCost = (lastPrice, avgCost) => {
//   if (!lastPrice || !avgCost || avgCost === 0) return null;
//   return ((lastPrice - avgCost) / avgCost) * 100;
// };

// export const calculateProfitLoss = (lastPrice, avgCost, shares) => {
//   if (!lastPrice || !avgCost || !shares) return 0;
//   return (lastPrice - avgCost) * shares;
// };

// export const renderProfitLoss = (lastPrice, avgCost, shares) => {
//   const profit = calculateProfitLoss(lastPrice, avgCost, shares);
//   let color = "grey";
//   if (profit > 0) color = "green";
//   else if (profit < 0) color = "red";

//   return (
//     <span style={{ color }}>
//       Rs. {profit.toFixed(2)}
//     </span>
//   );
// };


import React from "react";

/**
 * Extract clean company name and XD/XB flag from API name field
 */
export const extractNameAndXD = (rawName = "") => {
  if (!rawName) return { name: "", xdxb: "" };

  const match = rawName.match(/(.*?)(XD|XB)$/i);
  if (match) {
    return {
      name: match[1].trim(),
      xdxb: match[2].toUpperCase(),
    };
  }

  return { name: rawName.trim(), xdxb: "" };
};

/**
 * Render "Last Price" cell with color + arrow
 */
export const renderLastPrice = (item) => {
  console.log("🔎 renderLastPrice input:", {
    lastPrice: item.lastPrice,
    type: typeof item.lastPrice,
    changeValue: item.changeValue,
    changePercent: item.changePercent,
  });

  const priceNum = Number(item.lastPrice);
  const price = !isNaN(priceNum) ? priceNum.toFixed(2) : "-";

  const changeValueNum = Number(item.changeValue);
  const changeValue = !isNaN(changeValueNum)
    ? changeValueNum.toFixed(2)
    : "0.00";

  const changePercent = item.changePercent || "";

  // Decide color & arrow
  const isPositive = changeValueNum > 0;
  const isNegative = changeValueNum < 0;

  let color = "inherit";
  let arrow = "";

  if (isPositive) {
    color = "green";
    arrow = "▲";
  } else if (isNegative) {
    color = "red";
    arrow = "▼";
  }

  return (
    <div style={{ color, textAlign: "center", lineHeight: "1.4" }}>
      <div>Rs. {price}</div>
      <div>{arrow}</div>
      <div>
        {changeValue} {changePercent}
      </div>
    </div>
  );
};

/**
 * Calculate portfolio stats for a group of transactions
 */
export const calculatePortfolio = (symbol, transactions) => {
  let cumulativeUnits = 0;
  let cumulativeCost = 0;

  transactions.forEach((txn) => {
    const type = txn.Type || txn.type;
    const units = Number(txn["Number of Units"] || txn.units || 0);
    const pricePerShare = Number(
      (txn["Price per Share"] || txn.pricePerShare || "0")
        .toString()
        .replace(/[^\d.-]/g, "")
    );

    // --- Fee calculation (aligned with TransactionUtils) ---
    let fees = 0;
    if (type === "Buy" || type === "Sell") {
      let commission =
        pricePerShare < 20 ? units * 0.03 : units * pricePerShare * 0.0015;
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
    // Dividends don’t change units or cost

    console.log("🔎 Txn detail:", symbol, {
      type,
      units,
      pricePerShare,
      fees,
      cumulativeUnits,
      cumulativeCost,
    });
  });

  const avgCost = cumulativeUnits > 0 ? cumulativeCost / cumulativeUnits : 0;

  console.log("📊 Portfolio calc:", symbol, {
    cumulativeUnits,
    cumulativeCost,
    avgCost,
  });

  return { cumulativeUnits, cumulativeCost, avgCost };
};

/**
 * Calculate Yield on Cost (%)
 */
export const calculateYieldOnCost = (lastPrice, avgCost) => {
  if (!lastPrice || !avgCost || avgCost === 0) return null;
  return ((lastPrice - avgCost) / avgCost) * 100;
};

export const calculateProfitLoss = (lastPrice, avgCost, shares) => {
  if (!lastPrice || !avgCost || !shares) return 0;
  return (lastPrice - avgCost) * shares;
};

export const renderProfitLoss = (lastPrice, avgCost, shares) => {
  const profit = calculateProfitLoss(lastPrice, avgCost, shares);

  console.log("💰 renderProfitLoss input:", {
    lastPrice,
    avgCost,
    shares,
    profit,
    type: typeof profit,
  });

  let color = "grey";
  if (profit > 0) color = "green";
  else if (profit < 0) color = "red";

  return (
    <span style={{ color }}>
      Rs. {Number(profit).toFixed(2)}
    </span>
  );
};
