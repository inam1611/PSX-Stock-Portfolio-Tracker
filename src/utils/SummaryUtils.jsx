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
  const price =
    item.lastPrice !== null && item.lastPrice !== undefined
      ? item.lastPrice.toFixed(2)
      : "-";

  const changeValue =
    item.changeValue !== null && item.changeValue !== undefined
      ? item.changeValue.toFixed(2)
      : "0.00";

  const changePercent = item.changePercent || "";

  // Decide color & arrow
  const isPositive = parseFloat(item.changeValue) > 0;
  const isNegative = parseFloat(item.changeValue) < 0;

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
