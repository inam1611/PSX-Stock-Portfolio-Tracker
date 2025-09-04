// shared/transaction_config.js
const TRANSACTION_HEADERS = [
  "Date",
  "Stock Symbol",
  "Type",
  "Number of Units",
  "Price per Share",
];

// CJS for Electron
if (typeof module !== "undefined") {
  module.exports = { TRANSACTION_HEADERS };
}

// ESM for React
export { TRANSACTION_HEADERS };

