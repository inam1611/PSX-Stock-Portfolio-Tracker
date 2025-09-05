// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {/* For now, just show blank cells */}
//                     {item[col] ?? ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker" ? item.stockTicker : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;


// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker" ? item.stockTicker :
//                     col === "Name" ? item.name :
//                     col === "Industry" ? item.industry :
//                     ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;



// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker"
//                       ? item.stockTicker
//                       : col === "Name"
//                       ? item.name
//                       : col === "Industry"
//                       ? item.industry
//                       : col === "XD/XB"
//                       ? item.xdxb
//                       : col === "JSON"
//                       ? (
//                           <pre
//                             style={{
//                               whiteSpace: "pre-wrap",
//                               maxWidth: "300px",
//                               maxHeight: "200px",
//                               overflow: "auto",
//                               background: "#f8f8f8",
//                               padding: "5px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             {JSON.stringify(item.rawJson, null, 2)}
//                           </pre>
//                         )
//                       : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;


// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker"
//                       ? item.stockTicker
//                       : col === "Name"
//                       ? item.name
//                       : col === "Industry"
//                       ? item.industry
//                       : col === "XD/XB"
//                       ? item.xdxb
//                       : col === "Last Price"
//                       ? item.lastPrice !== null
//                         ? `Rs. ${item.lastPrice.toFixed(2)}`
//                         : "-"
//                       : col === "JSON"
//                       ? (
//                           <pre
//                             style={{
//                               whiteSpace: "pre-wrap",
//                               maxWidth: "300px",
//                               maxHeight: "200px",
//                               overflow: "auto",
//                               background: "#f8f8f8",
//                               padding: "5px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             {JSON.stringify(item.rawJson, null, 2)}
//                           </pre>
//                         )
//                       : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   const renderLastPrice = (item) => {
//     const price =
//       item.lastPrice !== null && item.lastPrice !== undefined
//         ? item.lastPrice.toFixed(2)
//         : "-";

//     const changeValue =
//       item.changeValue !== null && item.changeValue !== undefined
//         ? item.changeValue.toFixed(2)
//         : "0.00";

//     const changePercent = item.changePercent || "";

//     return `${changeValue} ${changePercent} Rs. ${price}`;
//   };

//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker"
//                       ? item.stockTicker
//                       : col === "Name"
//                       ? item.name
//                       : col === "Industry"
//                       ? item.industry
//                       : col === "XD/XB"
//                       ? item.xdxb
//                       : col === "Last Price"
//                       ? renderLastPrice(item)
//                       : col === "JSON"
//                       ? (
//                           <pre
//                             style={{
//                               whiteSpace: "pre-wrap",
//                               maxWidth: "300px",
//                               maxHeight: "200px",
//                               overflow: "auto",
//                               background: "#f8f8f8",
//                               padding: "5px",
//                               borderRadius: "5px",
//                               WebkitTextFillColor: "green",
//                             }}
//                           >
//                             {JSON.stringify(item.rawJson, null, 2)}
//                           </pre>
//                         )
//                       : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   const renderLastPrice = (item) => {
//   const price =
//     item.lastPrice !== null && item.lastPrice !== undefined
//       ? item.lastPrice.toFixed(2)
//       : "-";

//   const changeValue =
//     item.changeValue !== null && item.changeValue !== undefined
//       ? item.changeValue.toFixed(2)
//       : "0.00";

//   const changePercent = item.changePercent || "";

//   const isPositive = parseFloat(item.changeValue) > 0;
//   const isNegative = parseFloat(item.changeValue) < 0;

//   const changeStyle = {
//     color: isPositive ? "green" : isNegative ? "red" : "inherit",
//     fontWeight: "bold",
//     textAlign: "center",
//   };

//   const arrow = isPositive ? "▲" : isNegative ? "▼" : "";

//   return (
//     <div style={{ textAlign: "center" }}>
//       <div>Rs. {price}</div>
//       <div style={changeStyle}>{arrow}</div>
//       <div style={changeStyle}>
//         {changeValue} {changePercent}
//       </div>
//     </div>
//   );
// };


//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker"
//                       ? item.stockTicker
//                       : col === "Name"
//                       ? item.name
//                       : col === "Industry"
//                       ? item.industry
//                       : col === "XD/XB"
//                       ? item.xdxb
//                       : col === "Last Price"
//                       ? renderLastPrice(item)
//                       : col === "JSON"
//                       ? (
//                           <pre
//                             style={{
//                               whiteSpace: "pre-wrap",
//                               maxWidth: "300px",
//                               maxHeight: "200px",
//                               overflow: "auto",
//                               background: "#f8f8f8",
//                               padding: "5px",
//                               borderRadius: "5px",
//                               WebkitTextFillColor: "green",
//                             }}
//                           >
//                             {JSON.stringify(item.rawJson, null, 2)}
//                           </pre>
//                         )
//                       : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import { renderLastPrice } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {
//                     col === "Stock Ticker"
//                       ? item.stockTicker
//                       : col === "Name"
//                       ? item.name
//                       : col === "Industry"
//                       ? item.industry
//                       : col === "XD/XB"
//                       ? item.xdxb
//                       : col === "Last Price"
//                       ? renderLastPrice(item)
//                       : col === "JSON"
//                       ? (
//                           <pre
//                             style={{
//                               whiteSpace: "pre-wrap",
//                               maxWidth: "300px",
//                               maxHeight: "200px",
//                               overflow: "auto",
//                               background: "#f8f8f8",
//                               padding: "5px",
//                               borderRadius: "5px",
//                               WebkitTextFillColor: "green",
//                             }}
//                           >
//                             {JSON.stringify(item.rawJson, null, 2)}
//                           </pre>
//                         )
//                       : ""}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;


// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import { renderLastPrice } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// // 💰 Currency formatter (Pakistani Rupees, with commas)
// const formatCurrency = (value) => {
//   if (typeof value !== "number" || isNaN(value)) return "Rs. 0.0";
//   return new Intl.NumberFormat("en-PK", {
//     style: "currency",
//     currency: "PKR",
//     minimumFractionDigits: 1,
//     maximumFractionDigits: 2,
//   }).format(value);
// };

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => (
//                   <td key={colIndex}>
//                     {col === "Stock Ticker" ? (
//                       item.stockTicker
//                     ) : col === "Name" ? (
//                       item.name
//                     ) : col === "Industry" ? (
//                       item.industry
//                     ) : col === "XD/XB" ? (
//                       item.xdxb
//                     ) : col === "Shares" ? (
//                       item.shares
//                     ) : col === "Yield on Cost" ? (
//                       item.yieldOnCost !== null
//                       ? `${item.yieldOnCost.toFixed(2)}%`
//                       : "-"
//                     ) : col === "Cumulative Cost" ? (
//                       formatCurrency(item.cumulativeCost)
//                     ) : col === "Cost per share" ? (
//                       formatCurrency(item.avgCost)
//                     ) : col === "Last Price" ? (
//                       renderLastPrice(item)
//                     ) : col === "JSON" ? (
//                       <pre
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           maxWidth: "300px",
//                           maxHeight: "200px",
//                           overflow: "auto",
//                           background: "#f8f8f8",
//                           padding: "5px",
//                           borderRadius: "5px",
//                           WebkitTextFillColor: "green",
//                         }}
//                       >
//                         {JSON.stringify(item.rawJson, null, 2)}
//                       </pre>
//                     ) : (
//                       ""
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available - Fetching Data....
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;


// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import {
//   renderLastPrice,
//   calculateYieldOnCost,
// } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => {
//                   let content;

//                   if (col === "Stock Ticker") {
//                     content = item.stockTicker;
//                   } else if (col === "Name") {
//                     content = item.name;
//                   } else if (col === "Investment Category") {
//                     content = "Equity";
//                   } else if (col === "Industry") {
//                     content = item.industry;
//                   } else if (col === "XD/XB") {
//                     content = item.xdxb;
//                   } else if (col === "Shares") {
//                     content = item.shares;
//                   } else if (col === "Cost per share") {
//                     content = `Rs. ${item.avgCost?.toFixed(2) || "0.00"}`;
//                   } else if (col === "Cumulative Cost") {
//                     content = `Rs. ${
//                       item.cumulativeCost?.toFixed(2) || "0.00"
//                     }`;
//                   } else if (col === "Last Price") {
//                     content = renderLastPrice(item);
//                   } else if (col === "Yield on Cost") {
//                     const yieldPct = calculateYieldOnCost(
//                       item.lastPrice,
//                       item.avgCost
//                     );
//                     if (yieldPct === null) {
//                       content = "-";
//                     } else {
//                       const color =
//                         yieldPct > 0 ? "green" : yieldPct < 0 ? "red" : "gray";
//                       content = (
//                         <span style={{ color }}>{yieldPct.toFixed(2)}%</span>
//                       );
//                     }
//                   } else if (col === "Profit/Loss") {
//                     const profit =
//                       item.lastPrice && item.avgCost && item.shares
//                         ? (item.lastPrice - item.avgCost) * item.shares
//                         : 0;
//                     const color =
//                       profit > 0 ? "green" : profit < 0 ? "red" : "gray";
//                     content = (
//                       <span style={{ color }}>Rs. {profit.toFixed(2)}</span>
//                     );
//                   } else if (col === "Portfolio %") {
//                     const pct = item.portfolioPercent || 0;
//                     content = `${pct.toFixed(2)}%`; // no coloring
//                   } else if (col === "JSON") {
//                     content = (
//                       <pre
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           maxWidth: "300px",
//                           maxHeight: "200px",
//                           overflow: "auto",
//                           background: "#f8f8f8",
//                           padding: "5px",
//                           borderRadius: "5px",
//                           WebkitTextFillColor: "green",
//                         }}
//                       >
//                         {JSON.stringify(item.rawJson, null, 2)}
//                       </pre>
//                     );
//                   } else {
//                     content = "";
//                   }

//                   return <td key={colIndex}>{content}</td>;
//                 })}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import { renderLastPrice, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {summaries.length > 0 ? (
//             summaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => {
//                   let content;

//                   switch (col) {
//                     case "Stock Ticker":
//                       content = item.stockTicker;
//                       break;
//                     case "Name":
//                       content = item.name;
//                       break;
//                     case "Investment Category":
//                       content = "Equity";
//                       break;
//                     case "Industry":
//                       content = item.industry;
//                       break;
//                     case "XD/XB":
//                       content = item.xdxb;
//                       break;
//                     case "Shares":
//                       content = item.shares;
//                       break;
//                     case "Cost per share":
//                       content = `Rs. ${item.avgCost?.toFixed(2) || "0.00"}`;
//                       break;
//                     case "Cumulative Cost":
//                       content = `Rs. ${item.cumulativeCost?.toFixed(2) || "0.00"}`;
//                       break;
//                     case "Last Price":
//                       content = renderLastPrice(item);
//                       break;
//                     case "Yield on Cost": {
//                       const yieldPct = calculateYieldOnCost(item.lastPrice, item.avgCost);
//                       if (yieldPct === null) {
//                         content = "-";
//                       } else {
//                         const color = yieldPct > 0 ? "green" : yieldPct < 0 ? "red" : "gray";
//                         content = <span style={{ color }}>{yieldPct.toFixed(2)}%</span>;
//                       }
//                       break;
//                     }
//                     case "Profit/Loss": {
//                       const profit =
//                         item.lastPrice && item.avgCost && item.shares
//                           ? (item.lastPrice - item.avgCost) * item.shares
//                           : 0;
//                       const color = profit > 0 ? "green" : profit < 0 ? "red" : "gray";
//                       content = <span style={{ color }}>Rs. {profit.toFixed(2)}</span>;
//                       break;
//                     }
//                     case "Portfolio %": {
//                       const pct = item.portfolioPercent || 0;
//                       content = `${pct.toFixed(2)}%`; // no coloring
//                       break;
//                     }
//                     case "JSON":
//                       content = (
//                         <pre
//                           style={{
//                             whiteSpace: "pre-wrap",
//                             maxWidth: "300px",
//                             maxHeight: "200px",
//                             overflow: "auto",
//                             background: "#f8f8f8",
//                             padding: "5px",
//                             borderRadius: "5px",
//                             WebkitTextFillColor: "green",
//                           }}
//                         >
//                           {JSON.stringify(item.rawJson, null, 2)}
//                         </pre>
//                       );
//                       break;
//                     default:
//                       content = "";
//                   }

//                   return <td key={colIndex}>{content}</td>;
//                 })}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={SUMMARY_HEADERS.length}
//                 style={{ textAlign: "center", padding: "1rem" }}
//               >
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React, { useState, useMemo } from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import { renderLastPrice, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   const [filters, setFilters] = useState({});
//   const [activeDropdown, setActiveDropdown] = useState(null); // open column filter

//   // Get unique values for a column (for filter options)
//   const getUniqueValues = (col) => {
//     return Array.from(
//       new Set(
//         summaries.map((item) => {
//           switch (col) {
//             case "Stock Ticker":
//               return item.stockTicker;
//             case "Industry":
//               return item.industry || "";
//             case "Investment Category":
//               return "Equity";
//             case "XD/XB":
//               return item.xdxb || "";
//             default:
//               return item[col] || "";
//           }
//         })
//       )
//     );
//   };

//   // Toggle filter value
//   const toggleFilterValue = (col, value) => {
//     setFilters((prev) => {
//       const current = prev[col] || [];
//       const newValues = current.includes(value)
//         ? current.filter((v) => v !== value)
//         : [...current, value];
//       return { ...prev, [col]: newValues };
//     });
//   };

//   // Select all / deselect all
//   const selectAll = (col) => {
//     const allValues = getUniqueValues(col);
//     const current = filters[col] || [];
//     const newValues = current.length === allValues.length ? [] : allValues;
//     setFilters((prev) => ({ ...prev, [col]: newValues }));
//   };

//   const toggleDropdown = (col) => {
//     setActiveDropdown(activeDropdown === col ? null : col);
//   };

//   // Filter summaries based on selected filters
//   const filteredSummaries = useMemo(() => {
//     return summaries.filter((item) =>
//       Object.entries(filters).every(([col, values]) => {
//         if (!values || values.length === 0) return true;
//         let value;
//         switch (col) {
//           case "Stock Ticker":
//             value = item.stockTicker;
//             break;
//           case "Industry":
//             value = item.industry || "";
//             break;
//           case "Investment Category":
//             value = "Equity";
//             break;
//           case "XD/XB":
//             value = item.xdxb || "";
//             break;
//           default:
//             value = item[col];
//         }
//         return values.includes(value);
//       })
//     );
//   }, [summaries, filters]);

//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col} style={{ position: "relative" }}>
//                 {col}

//                 {/* Add filter UI for applicable columns */}
//                 {["Stock Ticker", "Industry", "Investment Category", "XD/XB"].includes(col) && (
//                   <div className="filter-dropdown">
//                     <button className="filter-btn" onClick={() => toggleDropdown(col)}>
//                       ▼
//                     </button>
//                     {activeDropdown === col && (
//                       <div className="filter-menu">
//                         <label>
//                           <input
//                             type="checkbox"
//                             checked={filters[col]?.length === getUniqueValues(col).length}
//                             onChange={() => selectAll(col)}
//                           />
//                           Select All
//                         </label>
//                         {getUniqueValues(col).map((value, idx) => (
//                           <label key={idx}>
//                             <input
//                               type="checkbox"
//                               checked={filters[col]?.includes(value) || false}
//                               onChange={() => toggleFilterValue(col, value)}
//                             />
//                             {value}
//                           </label>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {filteredSummaries.length > 0 ? (
//             filteredSummaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => {
//                   let content;
//                   switch (col) {
//                     case "Stock Ticker":
//                       content = item.stockTicker;
//                       break;
//                     case "Name":
//                       content = item.name;
//                       break;
//                     case "Investment Category":
//                       content = "Equity";
//                       break;
//                     case "Industry":
//                       content = item.industry;
//                       break;
//                     case "XD/XB":
//                       content = item.xdxb;
//                       break;
//                     case "Shares":
//                       content = item.shares;
//                       break;
//                     case "Cost per share":
//                       content = `Rs. ${item.avgCost?.toFixed(2) || "0.00"}`;
//                       break;
//                     case "Cumulative Cost":
//                       content = `Rs. ${item.cumulativeCost?.toFixed(2) || "0.00"}`;
//                       break;
//                     case "Last Price":
//                       content = renderLastPrice(item);
//                       break;
//                     case "Yield on Cost": {
//                       const yieldPct = calculateYieldOnCost(item.lastPrice, item.avgCost);
//                       if (yieldPct === null) content = "-";
//                       else {
//                         const color = yieldPct > 0 ? "green" : yieldPct < 0 ? "red" : "gray";
//                         content = <span style={{ color }}>{yieldPct.toFixed(2)}%</span>;
//                       }
//                       break;
//                     }
//                     case "Profit/Loss": {
//                       const profit =
//                         item.lastPrice && item.avgCost && item.shares
//                           ? (item.lastPrice - item.avgCost) * item.shares
//                           : 0;
//                       const color = profit > 0 ? "green" : profit < 0 ? "red" : "gray";
//                       content = <span style={{ color }}>Rs. {profit.toFixed(2)}</span>;
//                       break;
//                     }
//                     case "Portfolio %":
//                       content = `${item.portfolioPercent?.toFixed(2) || "0.00"}%`;
//                       break;
//                     case "JSON":
//                       content = (
//                         <pre
//                           style={{
//                             whiteSpace: "pre-wrap",
//                             maxWidth: "300px",
//                             maxHeight: "200px",
//                             overflow: "auto",
//                             background: "#f8f8f8",
//                             padding: "5px",
//                             borderRadius: "5px",
//                             WebkitTextFillColor: "green",
//                           }}
//                         >
//                           {JSON.stringify(item.rawJson, null, 2)}
//                         </pre>
//                       );
//                       break;
//                     default:
//                       content = "";
//                   }
//                   return <td key={colIndex}>{content}</td>;
//                 })}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={SUMMARY_HEADERS.length} style={{ textAlign: "center", padding: "1rem" }}>
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

// import React, { useState, useMemo } from "react";
// import { SUMMARY_HEADERS } from "../config/summary_config.js";
// import { renderLastPrice, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";
// import "../styles/SummaryTable.css";

// function SummaryTable({ summaries }) {
//   const [filters, setFilters] = useState({});
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const getUniqueValues = (col) => {
//     return Array.from(
//       new Set(
//         summaries.map((item) => {
//           switch (col) {
//             case "Stock Ticker": return item.stockTicker;
//             case "Industry": return item.industry || "";
//             case "Investment Category": return "Equity";
//             case "XD/XB": return item.xdxb || "";
//             default: return item[col] || "";
//           }
//         })
//       )
//     );
//   };

//   const toggleFilterValue = (col, value) => {
//     setFilters((prev) => {
//       const current = prev[col] || [];
//       const newValues = current.includes(value)
//         ? current.filter((v) => v !== value)
//         : [...current, value];
//       return { ...prev, [col]: newValues };
//     });
//   };

//   const selectAll = (col) => {
//     const allValues = getUniqueValues(col);
//     const current = filters[col] || [];
//     const newValues = current.length === allValues.length ? [] : allValues;
//     setFilters((prev) => ({ ...prev, [col]: newValues }));
//   };

//   const toggleDropdown = (col) => setActiveDropdown(activeDropdown === col ? null : col);

//   const filteredSummaries = useMemo(() => {
//     return summaries.filter((item) =>
//       Object.entries(filters).every(([col, values]) => {
//         if (!values || values.length === 0) return true;
//         let value;
//         switch (col) {
//           case "Stock Ticker": value = item.stockTicker; break;
//           case "Industry": value = item.industry || ""; break;
//           case "Investment Category": value = "Equity"; break;
//           case "XD/XB": value = item.xdxb || ""; break;
//           default: value = item[col]; break;
//         }
//         return values.includes(value);
//       })
//     );
//   }, [summaries, filters]);

//   return (
//     <div className="summary-table-container">
//       <table className="summary-table">
//         <thead>
//           <tr>
//             {SUMMARY_HEADERS.map((col) => (
//               <th key={col} style={{ position: "relative" }}>
//                 {col}
//                 {["Stock Ticker", "Industry", "Investment Category", "XD/XB"].includes(col) && (
//                   <div className="filter-dropdown">
//                     <button className="filter-btn" onClick={() => toggleDropdown(col)}>▼</button>
//                     {activeDropdown === col && (
//                       <div className="filter-menu">
//                         <label>
//                           <input
//                             type="checkbox"
//                             checked={filters[col]?.length === getUniqueValues(col).length}
//                             onChange={() => selectAll(col)}
//                           />
//                           Select All
//                         </label>
//                         {getUniqueValues(col).map((value, idx) => (
//                           <label key={idx}>
//                             <input
//                               type="checkbox"
//                               checked={filters[col]?.includes(value) || false}
//                               onChange={() => toggleFilterValue(col, value)}
//                             />
//                             {value}
//                           </label>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {filteredSummaries.length > 0 ? (
//             filteredSummaries.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {SUMMARY_HEADERS.map((col, colIndex) => {
//                   let content;
//                   switch (col) {
//                     case "Stock Ticker": content = item.stockTicker; break;
//                     case "Name": content = item.name; break;
//                     case "Investment Category": content = "Equity"; break;
//                     case "Industry": content = item.industry; break;
//                     case "XD/XB": content = item.xdxb; break;
//                     case "Shares": content = item.shares; break;
//                     case "Cost per share": content = `Rs. ${item.avgCost?.toFixed(2) || "0.00"}`; break;
//                     case "Cumulative Cost": content = `Rs. ${item.cumulativeCost?.toFixed(2) || "0.00"}`; break;
//                     case "Last Price": content = renderLastPrice(item); break;
//                     case "Yield  on Cost": {
//                       const yieldPct = calculateYieldOnCost(item.lastPrice, item.avgCost);
//                       if (yieldPct === null) content = "-";
//                       else {
//                         const color = yieldPct > 0 ? "green" : yieldPct < 0 ? "red" : "gray";
//                         content = <span style={{ color }}>{yieldPct.toFixed(2)}%</span>;
//                       }
//                       break;
//                     }
//                     case "Unrealized Gain/Loss": {
//                       const profit = item.lastPrice && item.avgCost && item.shares
//                         ? (item.lastPrice - item.avgCost) * item.shares
//                         : 0;
//                       const color = profit > 0 ? "green" : profit < 0 ? "red" : "gray";
//                       content = <span style={{ color }}>Rs. {profit.toFixed(2)}</span>;
//                       break;
//                     }
                    
//                     case "Portfolio %":
//                       content = `${item.portfolioPercent?.toFixed(2) || "0.00"}%`;
//                       break;
//                     case "JSON":
//                       content = (
//                         <pre style={{
//                           whiteSpace: "pre-wrap",
//                           maxWidth: "300px",
//                           maxHeight: "200px",
//                           overflow: "auto",
//                           background: "#f8f8f8",
//                           padding: "5px",
//                           borderRadius: "5px",
//                           WebkitTextFillColor: "green"
//                         }}>
//                           {JSON.stringify(item.rawJson, null, 2)}
//                         </pre>
//                       );
//                       break;
//                     default: content = ""; break;
//                   }
                  
//                   return <td key={colIndex}>{content}</td>;
//                 })}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={SUMMARY_HEADERS.length} style={{ textAlign: "center", padding: "1rem" }}>
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SummaryTable;

import React, { useState, useMemo } from "react";
import { SUMMARY_HEADERS } from "../config/summary_config.js";
import { renderLastPrice, calculateYieldOnCost } from "../utils/SummaryUtils.jsx";
import "../styles/SummaryTable.css";

function SummaryTable({ summaries }) {
  const [filters, setFilters] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  const getUniqueValues = (col) => {
    return Array.from(
      new Set(
        summaries.map((item) => {
          switch (col) {
            case "Stock Ticker": return item.stockTicker;
            case "Industry": return item.industry || "";
            case "Investment Category": return "Equity";
            case "XD/XB": return item.xdxb || "";
            default: return item[col] || "";
          }
        })
      )
    );
  };

  const toggleFilterValue = (col, value) => {
    setFilters((prev) => {
      const current = prev[col] || [];
      const newValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [col]: newValues };
    });
  };

  const selectAll = (col) => {
    const allValues = getUniqueValues(col);
    const current = filters[col] || [];
    const newValues = current.length === allValues.length ? [] : allValues;
    setFilters((prev) => ({ ...prev, [col]: newValues }));
  };

  const toggleDropdown = (col) => setActiveDropdown(activeDropdown === col ? null : col);

  const filteredSummaries = useMemo(() => {
    return summaries.filter((item) =>
      Object.entries(filters).every(([col, values]) => {
        if (!values || values.length === 0) return true;
        let value;
        switch (col) {
          case "Stock Ticker": value = item.stockTicker; break;
          case "Industry": value = item.industry || ""; break;
          case "Investment Category": value = "Equity"; break;
          case "XD/XB": value = item.xdxb || ""; break;
          default: value = item[col]; break;
        }
        return values.includes(value);
      })
    );
  }, [summaries, filters]);

  return (
    <div className="summary-table-container">
      <table className="summary-table">
        <thead>
          <tr>
            {SUMMARY_HEADERS.map((col) => (
              <th key={col} style={{ position: "relative" }}>
                {col}
                {["Stock Ticker", "Industry", "Investment Category", "XD/XB"].includes(col) && (
                  <div className="filter-dropdown">
                    <button className="filter-btn" onClick={() => toggleDropdown(col)}>▼</button>
                    {activeDropdown === col && (
                      <div className="filter-menu">
                        <label>
                          <input
                            type="checkbox"
                            checked={filters[col]?.length === getUniqueValues(col).length}
                            onChange={() => selectAll(col)}
                          />
                          Select All
                        </label>
                        {getUniqueValues(col).map((value, idx) => (
                          <label key={idx}>
                            <input
                              type="checkbox"
                              checked={filters[col]?.includes(value) || false}
                              onChange={() => toggleFilterValue(col, value)}
                            />
                            {value}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredSummaries.length > 0 ? (
            filteredSummaries.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {SUMMARY_HEADERS.map((col, colIndex) => {
                  let content;
                  switch (col) {
                    case "Stock Ticker":
                      content = item.stockTicker;
                      break;
                    case "Name":
                      content = item.name;
                      break;
                    case "Investment Category":
                      content = "Equity";
                      break;
                    case "Industry":
                      content = item.industry;
                      break;
                    case "XD/XB":
                      content = item.xdxb;
                      break;
                    case "Shares":
                      content = item.shares;
                      break;
                    case "Cost per share":
                      content = `Rs. ${item.avgCost?.toFixed(2) || "0.00"}`;
                      break;
                    case "Cumulative Cost":
                      content = `Rs. ${item.cumulativeCost?.toFixed(2) || "0.00"}`;
                      break;
                    case "Last Price":
                      content = renderLastPrice(item);
                      break;
                    case "Yield  on Cost": {
                      const yieldPct = calculateYieldOnCost(item.lastPrice, item.avgCost);
                      if (yieldPct === null) content = "-";
                      else {
                        const color = yieldPct > 0 ? "green" : yieldPct < 0 ? "red" : "gray";
                        content = <span style={{ color }}>{yieldPct.toFixed(2)}%</span>;
                      }
                      break;
                    }
                    case "Unrealized Gain/Loss": {
                      const profit = item.lastPrice && item.avgCost && item.shares
                        ? (item.lastPrice - item.avgCost) * item.shares
                        : 0;
                      const color = profit > 0 ? "green" : profit < 0 ? "red" : "gray";
                      content = <span style={{ color }}>Rs. {profit.toFixed(2)}</span>;
                      break;
                    }
                    case "Realized Gain/Loss": {
                      const realized = item.realizedPnL || 0;
                      const color = realized > 0 ? "green" : realized < 0 ? "red" : "gray";
                      content = <span style={{ color }}>Rs. {realized.toFixed(2)}</span>;
                      break;
                    }
                    case "Portfolio %":
                      content = `${item.portfolioPercent?.toFixed(2) || "0.00"}%`;
                      break;
                    case "JSON":
                      content = (
                        <pre style={{
                          whiteSpace: "pre-wrap",
                          maxWidth: "300px",
                          maxHeight: "200px",
                          overflow: "auto",
                          background: "#f8f8f8",
                          padding: "5px",
                          borderRadius: "5px",
                          WebkitTextFillColor: "green"
                        }}>
                          {JSON.stringify(item.rawJson, null, 2)}
                        </pre>
                      );
                      break;
                    default:
                      content = "";
                      break;
                  }

                  return <td key={colIndex}>{content}</td>;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={SUMMARY_HEADERS.length} style={{ textAlign: "center", padding: "1rem" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SummaryTable;
