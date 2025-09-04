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


import React from "react";
import { SUMMARY_HEADERS } from "../config/summary_config.js";
import { renderLastPrice } from "../utils/SummaryUtils.jsx";
import "../styles/SummaryTable.css";

// 💰 Currency formatter (Pakistani Rupees, with commas)
const formatCurrency = (value) => {
  if (typeof value !== "number" || isNaN(value)) return "Rs. 0.0";
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

function SummaryTable({ summaries }) {
  return (
    <div className="summary-table-container">
      <table className="summary-table">
        <thead>
          <tr>
            {SUMMARY_HEADERS.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {summaries.length > 0 ? (
            summaries.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {SUMMARY_HEADERS.map((col, colIndex) => (
                  <td key={colIndex}>
                    {col === "Stock Ticker" ? (
                      item.stockTicker
                    ) : col === "Name" ? (
                      item.name
                    ) : col === "Industry" ? (
                      item.industry
                    ) : col === "XD/XB" ? (
                      item.xdxb
                    ) : col === "Shares" ? (
                      item.shares
                    ) : col === "Cumulative Cost" ? (
                      formatCurrency(item.cumulativeCost)
                    ) : col === "Avg Cost" ? (
                      formatCurrency(item.avgCost)
                    ) : col === "Last Price" ? (
                      renderLastPrice(item)
                    ) : col === "JSON" ? (
                      <pre
                        style={{
                          whiteSpace: "pre-wrap",
                          maxWidth: "300px",
                          maxHeight: "200px",
                          overflow: "auto",
                          background: "#f8f8f8",
                          padding: "5px",
                          borderRadius: "5px",
                          WebkitTextFillColor: "green",
                        }}
                      >
                        {JSON.stringify(item.rawJson, null, 2)}
                      </pre>
                    ) : (
                      ""
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={SUMMARY_HEADERS.length}
                style={{ textAlign: "center", padding: "1rem" }}
              >
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

