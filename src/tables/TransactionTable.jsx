// import React from "react";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//   // === Row coloring by type ===
//   const getTypeClass = (type) => {
//     switch (type) {
//       case "Sell":
//         return "type-sell";
//       case "Buy":
//       case "Dividend":
//         return "type-buy";
//       default:
//         return "";
//     }
//   };

//   // === Fee Calculation Logic ===
//   const calculateFees = (txn) => {
//     const units = Number(txn["Number of Units"] || txn.units || 0);
//     const price = Number(txn["Price per Share"] || txn.price || 0);
//     const type = txn.Type || txn.type || "";
//     let fees = 0;

//     if (type === "Buy" || type === "Sell") {
//       // Brokerage Commission
//       let commission = 0;
//       if (price < 20) {
//         commission = units * 0.03; // per share
//       } else {
//         commission = units * price * 0.0015; // 0.15%
//       }

//       // Sales Tax on Brokerage
//       const salesTax = commission * 0.15;

//       // CDC Charges
//       const cdcCharges = units * 0.005;

//       fees = commission + salesTax + cdcCharges;
//     } else if (type === "Dividend") {
//       // Dividend Withholding Tax
//       const totalDividend = units * price;
//       fees = totalDividend * 0.15;
//     }

//     return fees;
//   };

//   return (
//     <div className="transaction-table-container">
//       <table className="transaction-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Stock Symbol</th>
//             <th>Type</th>
//             <th>Number of Units</th>
//             <th>Price per Share</th>
//             <th>Total Value</th>
//             <th>Fees</th> {/* New column */}
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(transactions) && transactions.length > 0 ? (
//             transactions.map((txn, index) => {
//               const date = txn.Date || txn.date || "";
//               const stock =
//                 (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//               const type = txn.Type || txn.type || "";
//               const units = Number(txn["Number of Units"] || txn.units || 0);
//               const price = Number(txn["Price per Share"] || txn.price || 0);
//               const totalValue = units * price;
//               const fees = calculateFees(txn);

//               return (
//                 <tr key={index}>
//                   <td>{date}</td>
//                   <td>{stock}</td>
//                   <td className={getTypeClass(type)}>{type}</td>
//                   <td>{units}</td>
//                   <td>{price ? `Rs. ${price.toLocaleString()}` : ""}</td>
//                   <td>{totalValue ? `Rs. ${totalValue.toLocaleString()}` : ""}</td>
//                   <td>{fees ? `Rs. ${fees.toFixed(2)}` : "Rs. 0.00"}</td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => onDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan="8" style={{ textAlign: "center", padding: "1rem" }}>
//                 No transactions added yet
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TransactionTable;


// import React from "react";
// import { TRANSACTION_HEADERS } from "../../shared/transaction_config.js";
// import {
//   calculateFees,
//   calculateTotalValue,
//   calculateNetValue,
//   getTypeClass,
// } from "../utils/transactionUtils";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//   const derivedColumns = ["Total Value", "Fees", "Net Value", "Action"];
//   const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns];

//   return (
//     <div className="transaction-table-container">
//       <table className="transaction-table">
//         <thead>
//           <tr>
//             {allColumns.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(transactions) && transactions.length > 0 ? (
//             transactions.map((txn, index) => {
//               const date = txn.Date || txn.date || "";
//               const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//               const type = txn.Type || txn.type || "";

//               const totalValue = calculateTotalValue(txn);
//               const fees = calculateFees(txn);
//               const netValue = calculateNetValue(txn);

//               return (
//                 <tr key={index}>
//                   {TRANSACTION_HEADERS.map((col) => {
//                     let value = txn[col] || txn[col.toLowerCase()] || "";
//                     if (col === "Stock Symbol") value = stock;
//                     if (col === "Type")
//                       return (
//                         <td key={col} className={getTypeClass(type)}>
//                           {type}
//                         </td>
//                       );
//                     return <td key={col}>{value}</td>;
//                   })}

//                   <td>{totalValue ? `Rs. ${totalValue.toLocaleString()}` : ""}</td>
//                   <td>{fees ? `Rs. ${fees.toFixed(2)}` : "Rs. 0.00"}</td>
//                   <td>{netValue ? `Rs. ${netValue.toFixed(2)}` : "Rs. 0.00"}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => onDelete(index)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
//                 No transactions added yet
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TransactionTable;



// import React from "react";
// import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";
// import { calculateDerivedColumns, derivedColumnFormats } from "../utils/transactionUtils";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//     const getTypeClass = (type) => {
//         switch (type) {
//             case "Sell": return "type-sell";
//             case "Buy":
//             case "Dividend": return "type-buy";
//             default: return "";
//         }
//     };

//     // Dynamically generate derived column names
//     const derivedColumns = Object.keys(calculateDerivedColumns);

//     const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns, "Action"];

//     return (
//         <div className="transaction-table-container">
//             <table className="transaction-table">
//                 <thead>
//                     <tr>
//                         {allColumns.map((col) => (
//                             <th key={col}>{col}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Array.isArray(transactions) && transactions.length > 0 ? (
//                         transactions.map((txn, index) => {
//                             const date = txn.Date || txn.date || "";
//                             const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//                             const type = txn.Type || txn.type || "";

//                             return (
//                                 <tr key={index}>
//                                     {/* Base columns */}
//                                     {TRANSACTION_HEADERS.map((col) => {
//                                         let value = txn[col] || txn[col.toLowerCase()] || "";
//                                         if (col === "Stock Symbol") value = stock;
//                                         if (col === "Type")
//                                             return <td key={col} className={getTypeClass(type)}>{type}</td>;
//                                         return <td key={col}>{value}</td>;
//                                     })}

//                                     {/* Derived columns dynamically */}
//                                     {derivedColumns.map((col) => {
//                                         const rawValue = calculateDerivedColumns[col](txn);
//                                         const format = derivedColumnFormats[col] || "currency"; // default to currency
//                                         let displayValue;

//                                         if (format === "currency") {
//                                             displayValue = rawValue ? `Rs. ${rawValue.toLocaleString()}` : "Rs. 0.00";
//                                         } else if (format === "percentage") {
//                                             displayValue = rawValue ? `${rawValue} %` : "0%";
//                                         } else {
//                                             displayValue = rawValue;
//                                         }

//                                         return <td key={col}>{displayValue}</td>;
//                                     })}

//                                     {/* Action column */}
//                                     <td>
//                                         <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             );
//                         })
//                     ) : (
//                         <tr>
//                             <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
//                                 No transactions added yet
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default TransactionTable;

// import React from "react";
// import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";
// import { calculateDerivedColumns, derivedColumnFormats, withCumulativeUnits } from "../utils/transactionUtils";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//     const getTypeClass = (type) => {
//         switch (type) {
//             case "Sell": return "type-sell";
//             case "Buy":
//             case "Dividend": return "type-buy";
//             default: return "";
//         }
//     };

//     // Apply cumulative units preprocessing
//     const processedTransactions = withCumulativeUnits(transactions);

//     // Dynamically generate derived column names
//     const derivedColumns = Object.keys(calculateDerivedColumns).concat("Cumulative Units");

//     const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns, "Action"];

//     return (
//         <div className="transaction-table-container">
//             <table className="transaction-table">
//                 <thead>
//                     <tr>
//                         {allColumns.map((col) => (
//                             <th key={col}>{col}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Array.isArray(processedTransactions) && processedTransactions.length > 0 ? (
//                         processedTransactions.map((txn, index) => {
//                             const date = txn.Date || txn.date || "";
//                             const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//                             const type = txn.Type || txn.type || "";

//                             return (
//                                 <tr key={index}>
//                                     {/* Base columns */}
//                                     {TRANSACTION_HEADERS.map((col) => {
//                                         let value = txn[col] || txn[col.toLowerCase()] || "";
//                                         if (col === "Stock Symbol") value = stock;
//                                         if (col === "Type")
//                                             return <td key={col} className={getTypeClass(type)}>{type}</td>;
//                                         return <td key={col}>{value}</td>;
//                                     })}

//                                     {/* Derived columns */}
//                                     {derivedColumns.map((col) => {
//                                         let rawValue;

//                                         if (col === "Cumulative Units") {
//                                             rawValue = txn["Cumulative Units"];
//                                         } else {
//                                             rawValue = calculateDerivedColumns[col](txn);
//                                         }

//                                         const format = derivedColumnFormats[col] || "currency";
//                                         let displayValue;

//                                         if (format === "currency") {
//                                             displayValue = rawValue ? `Rs. ${rawValue.toLocaleString()}` : "Rs. 0.00";
//                                         } else if (format === "percentage") {
//                                             displayValue = rawValue ? `${rawValue} %` : "0%";
//                                         } else {
//                                             displayValue = rawValue;
//                                         }

//                                         return <td key={col}>{displayValue}</td>;
//                                     })}

//                                     {/* Action column */}
//                                     <td>
//                                         <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             );
//                         })
//                     ) : (
//                         <tr>
//                             <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
//                                 No transactions added yet
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default TransactionTable;


// import React from "react";
// import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";
// import { calculateDerivedColumns, derivedColumnFormats, withCumulativeData } from "../utils/transactionUtils";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//     const getTypeClass = (type) => {
//         switch (type) {
//             case "Sell": return "type-sell";
//             case "Buy":
//             case "Dividend": return "type-buy";
//             default: return "";
//         }
//     };

//     // Apply cumulative preprocessing
//     const processedTransactions = withCumulativeData(transactions);

//     // Derived columns now include cumulative ones
//     const derivedColumns = Object.keys(calculateDerivedColumns).concat([
//         "Cumulative Units",
//         "Cumulative Cost",
//     ]);

//     const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns, "Action"];

//     return (
//         <div className="transaction-table-container">
//             <table className="transaction-table">
//                 <thead>
//                     <tr>
//                         {allColumns.map((col) => (
//                             <th key={col}>{col}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Array.isArray(processedTransactions) && processedTransactions.length > 0 ? (
//                         processedTransactions.map((txn, index) => {
//                             const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//                             const type = txn.Type || txn.type || "";

//                             return (
//                                 <tr key={index}>
//                                     {/* Base columns */}
//                                     {TRANSACTION_HEADERS.map((col) => {
//                                         let value = txn[col] || txn[col.toLowerCase()] || "";
//                                         if (col === "Stock Symbol") value = stock;
//                                         if (col === "Type")
//                                             return <td key={col} className={getTypeClass(type)}>{type}</td>;
//                                         return <td key={col}>{value}</td>;
//                                     })}

//                                     {/* Derived columns */}
//                                     {derivedColumns.map((col) => {
//                                         let rawValue;

//                                         if (col === "Cumulative Units" || col === "Cumulative Cost") {
//                                             rawValue = txn[col];
//                                         } else {
//                                             rawValue = calculateDerivedColumns[col](txn);
//                                         }

//                                         const format = derivedColumnFormats[col] || "currency";
//                                         let displayValue;

//                                         if (format === "currency") {
//                                             displayValue = rawValue ? `Rs. ${rawValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : "Rs. 0.00";
//                                         } else if (format === "percentage") {
//                                             displayValue = rawValue ? `${rawValue} %` : "0%";
//                                         } else {
//                                             displayValue = rawValue;
//                                         }

//                                         return <td key={col}>{displayValue}</td>;
//                                     })}

//                                     {/* Action column */}
//                                     <td>
//                                         <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             );
//                         })
//                     ) : (
//                         <tr>
//                             <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
//                                 No transactions added yet
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default TransactionTable;

// import React from "react";
// import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";
// import {
//   calculateDerivedColumns,
//   derivedColumnFormats,
//   withCumulativeData,     // ✅ make sure this is imported
// } from "../utils/transactionUtils";
// import "../styles/TransactionTable.css";

// function TransactionTable({ transactions, onDelete }) {
//   const getTypeClass = (type) => {
//     switch (type) {
//       case "Sell": return "type-sell";
//       case "Buy":
//       case "Dividend": return "type-buy";
//       default: return "";
//     }
//   };

//   // ✅ preprocess so each row has cumulative fields
//   const processedTransactions = withCumulativeData(transactions);

//   // include both per-row derived and cumulative columns
//   const derivedColumns = [
//     ...Object.keys(calculateDerivedColumns),
//     "Cumulative Units",
//     "Cumulative Cost",
//     "Cumulative Avg Cost/Unit",
//   ];

//   const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns, "Action"];

//   return (
//     <div className="transaction-table-container">
//       <table className="transaction-table">
//         <thead>
//           <tr>
//             {allColumns.map((col) => (
//               <th key={col}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(processedTransactions) && processedTransactions.length > 0 ? (
//             processedTransactions.map((txn, index) => {
//               const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
//               const type = txn.Type || txn.type || "";

//               return (
//                 <tr key={index}>
//                   {/* Base columns */}
//                   {TRANSACTION_HEADERS.map((col) => {
//                     let value = txn[col] || txn[col.toLowerCase()] || "";
//                     if (col === "Stock Symbol") value = stock;
//                     if (col === "Type")
//                       return <td key={col} className={getTypeClass(type)}>{type}</td>;
//                     return <td key={col}>{value}</td>;
//                   })}

//                   {/* Derived + cumulative columns */}
//                   {derivedColumns.map((col) => {
//                     // ✅ if we have a calculator, use it; otherwise read the precomputed value on the row
//                     const hasCalc = typeof calculateDerivedColumns[col] === "function";
//                     const rawValue = hasCalc ? calculateDerivedColumns[col](txn) : txn[col];

//                     const format = derivedColumnFormats[col] || "currency";
//                     let displayValue;

//                     if (format === "currency") {
//                       const v = Number(rawValue || 0);
//                       displayValue = `Rs. ${v.toLocaleString(undefined, {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2,
//                       })}`;
//                     } else if (format === "percentage") {
//                       const v = Number(rawValue || 0);
//                       displayValue = `${v.toFixed(2)} %`;
//                     } else if (format === "number") {
//                       const v = Number(rawValue || 0);
//                       displayValue = v.toLocaleString(undefined, { maximumFractionDigits: 4 });
//                     } else {
//                       displayValue = rawValue ?? "";
//                     }

//                     return <td key={col}>{displayValue}</td>;
//                   })}

//                   {/* Action column */}
//                   <td>
//                     <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
//                 No transactions added yet
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TransactionTable;

import React, { useState, useMemo } from "react";
import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";
import {
  calculateDerivedColumns,
  derivedColumnFormats,
  withCumulativeData,
} from "../utils/transactionUtils";
import "../styles/TransactionTable.css";

function TransactionTable({ transactions, onDelete }) {
  const [filters, setFilters] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null); // track open column

  const getTypeClass = (type) => {
    switch (type) {
      case "Sell":
        return "type-sell";
      case "Buy":
      case "Dividend":
        return "type-buy";
      default:
        return "";
    }
  };

  const processedTransactions = withCumulativeData(transactions);

  const derivedColumns = [
    ...Object.keys(calculateDerivedColumns),
    "Cumulative Units",
    "Cumulative Cost",
    "Cumulative Avg Cost/Unit",
  ];

  const allColumns = [...TRANSACTION_HEADERS, ...derivedColumns, "Action"];

  const filteredTransactions = useMemo(() => {
    return processedTransactions.filter((txn) => {
      return Object.entries(filters).every(([col, allowedValues]) => {
        if (!allowedValues || allowedValues.length === 0) return true;
        let value;
        if (TRANSACTION_HEADERS.includes(col)) {
          value = txn[col] ?? txn[col.toLowerCase()] ?? "";
          if (col === "Stock Symbol") value = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
        } else {
          value = txn[col];
        }
        return allowedValues.includes(value);
      });
    });
  }, [processedTransactions, filters]);

  const getUniqueValues = (col) => {
    const values = processedTransactions.map((txn) => {
      if (col === "Stock Symbol") return (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
      if (derivedColumns.includes(col)) {
        const hasCalc = typeof calculateDerivedColumns[col] === "function";
        return hasCalc ? calculateDerivedColumns[col](txn) : txn[col];
      }
      return txn[col] ?? txn[col.toLowerCase()] ?? "";
    });
    return Array.from(new Set(values));
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

  const toggleDropdown = (col) => {
    setActiveDropdown(activeDropdown === col ? null : col);
  };

  const selectAll = (col) => {
    const allValues = getUniqueValues(col);
    const current = filters[col] || [];
    const newValues = current.length === allValues.length ? [] : allValues;
    setFilters((prev) => ({ ...prev, [col]: newValues }));
  };

  return (
    <div className="transaction-table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            {allColumns.map((col) => (
              <th key={col} style={{ position: "relative" }}>
                {col}
                {col !== "Action" && (
                  <div className="filter-dropdown">
                    <button className="filter-btn" onClick={() => toggleDropdown(col)}>
                      ▼
                    </button>
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
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((txn, index) => {
              const stock = (txn["Stock Symbol"] || txn.stockName || "").toUpperCase();
              const type = txn.Type || txn.type || "";

              return (
                <tr key={index}>
                  {TRANSACTION_HEADERS.map((col) => {
                    let value = txn[col] || txn[col.toLowerCase()] || "";
                    if (col === "Stock Symbol") value = stock;
                    if (col === "Type")
                      return (
                        <td key={col} className={getTypeClass(type)}>
                          {type}
                        </td>
                      );
                    return <td key={col}>{value}</td>;
                  })}

                  {derivedColumns.map((col) => {
                    const hasCalc = typeof calculateDerivedColumns[col] === "function";
                    const rawValue = hasCalc ? calculateDerivedColumns[col](txn) : txn[col];

                    const format = derivedColumnFormats[col] || "currency";
                    let displayValue;

                    if (format === "currency") {
                      const v = Number(rawValue || 0);
                      displayValue = `Rs. ${v.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`;
                    } else if (format === "percentage") {
                      const v = Number(rawValue || 0);
                      displayValue = `${v.toFixed(2)} %`;
                    } else if (format === "number") {
                      const v = Number(rawValue || 0);
                      displayValue = v.toLocaleString(undefined, { maximumFractionDigits: 4 });
                    } else {
                      displayValue = rawValue ?? "";
                    }

                    return <td key={col}>{displayValue}</td>;
                  })}

                  <td>
                    <button className="delete-btn" onClick={() => onDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={allColumns.length} style={{ textAlign: "center", padding: "1rem" }}>
                No transactions added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
