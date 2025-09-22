// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");
// const fs = require("fs");
// const xlsx = require("xlsx");
// const { TRANSACTION_HEADERS } = require("../shared/transaction_config.js");


// // 🔑 Define file path globally so it's available everywhere
// const excelFilePath = path.join(__dirname, "data", "transactions.xlsx");

// // ✅ Create browser window
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   win.loadURL("http://localhost:3000"); // dev mode, change in prod
// }

// // ✅ Ensure Excel file + headers exist
// function ensureExcelFile() {
//   const dirPath = path.dirname(excelFilePath);

//   // 🔑 Create "data" folder if missing
//   if (!fs.existsSync(dirPath)) {
//     console.log("📁 Creating missing folder:", dirPath);
//     fs.mkdirSync(dirPath, { recursive: true });
//   }

//   // 🔑 If file missing, create with headers
//   if (!fs.existsSync(excelFilePath)) {
//     console.log("📂 Creating Excel file with headers:", excelFilePath);
//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.aoa_to_sheet([TRANSACTION_HEADERS]); // ✅ use shared config
//     xlsx.utils.book_append_sheet(wb, ws, "Transactions");
//     xlsx.writeFile(wb, excelFilePath);
//   } else {
//     console.log("✅ Excel file already exists:", excelFilePath);
//   }
// }

// // App ready → create file and window
// app.whenReady().then(() => {
//   ensureExcelFile();
//   createWindow();
// });

// // ✅ IPC: Read Transactions
// ipcMain.handle("read-transactions", () => {
//   try {
//     if (!fs.existsSync(excelFilePath)) {
//       console.warn("⚠️ File missing at read time!");
//       return [];
//     }
//     const wb = xlsx.readFile(excelFilePath);
//     const ws = wb.Sheets["Transactions"];
//     if (!ws) {
//       console.warn("⚠️ No 'Transactions' sheet found");
//       return [];
//     }
//     const rows = xlsx.utils.sheet_to_json(ws, { defval: "" });
//     console.log("📖 Read rows from Excel:", rows);
//     return rows;
//   } catch (err) {
//     console.error("❌ Error reading Excel:", err);
//     return [];
//   }
// });

// // ✅ IPC: Write Transaction
// ipcMain.handle("write-transaction", async (event, transaction) => {
//   try {
//     const workbook = xlsx.readFile(excelFilePath);
//     const worksheet = workbook.Sheets["Transactions"];
//     const jsonData = xlsx.utils.sheet_to_json(worksheet);

//     // 🔑 Map transaction object to match headers
//     const formattedTransaction = {
//       "Date": transaction.date,
//       "Stock Symbol": transaction.stockName,
//       "Type": transaction.type,
//       "Number of Units": transaction.units,
//       "Price per Share": transaction.price,
//     };

//     jsonData.push(formattedTransaction);

//     // ✅ Always rewrite with same headers
//     const newWorksheet = xlsx.utils.json_to_sheet(jsonData, {
//       header: TRANSACTION_HEADERS,
//     });

//     workbook.Sheets["Transactions"] = newWorksheet;
//     xlsx.writeFile(workbook, excelFilePath);

//     console.log("✅ Transaction added:", formattedTransaction);

//     return { success: true };
//   } catch (error) {
//     console.error("❌ Error writing transaction:", error);
//     return { success: false, error };
//   }
// });


// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");
// const fs = require("fs");
// const xlsx = require("xlsx");
// const { TRANSACTION_HEADERS } = require("../shared_config/transaction_config.js");

// // 🔑 Define file path globally
// const excelFilePath = path.join(__dirname, "data", "transactions.xlsx");

// // ✅ Create browser window
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   win.loadURL("http://localhost:3000"); // dev mode
// }

// // ✅ Ensure Excel file + headers exist
// function ensureExcelFile() {
//   const dirPath = path.dirname(excelFilePath);
//   if (!fs.existsSync(dirPath)) {
//     console.log("📁 Creating missing folder:", dirPath);
//     fs.mkdirSync(dirPath, { recursive: true });
//   }

//   if (!fs.existsSync(excelFilePath)) {
//     console.log("📂 Creating Excel file with headers:", excelFilePath);
//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.aoa_to_sheet([TRANSACTION_HEADERS]);
//     xlsx.utils.book_append_sheet(wb, ws, "Transactions");
//     xlsx.writeFile(wb, excelFilePath);
//   } else {
//     console.log("✅ Excel file already exists:", excelFilePath);
//   }
// }

// // App ready → create file and window
// app.whenReady().then(() => {
//   ensureExcelFile();
//   createWindow();
// });

// // ✅ IPC: Read Transactions
// ipcMain.handle("read-transactions", () => {
//   try {
//     if (!fs.existsSync(excelFilePath)) return [];
//     const wb = xlsx.readFile(excelFilePath);
//     const ws = wb.Sheets["Transactions"];
//     if (!ws) return [];
//     const rows = xlsx.utils.sheet_to_json(ws, { defval: "" });
//     return rows;
//   } catch (err) {
//     console.error("❌ Error reading Excel:", err);
//     return [];
//   }
// });

// // ✅ IPC: Write Transaction
// ipcMain.handle("write-transaction", async (event, transaction) => {
//   try {
//     const workbook = xlsx.readFile(excelFilePath);
//     const worksheet = workbook.Sheets["Transactions"];
//     const jsonData = xlsx.utils.sheet_to_json(worksheet);

//     const formattedTransaction = {
//       "Date": transaction.date,
//       "Stock Symbol": transaction.stockName,
//       "Type": transaction.type,
//       "Number of Units": transaction.units,
//       "Price per Share": transaction.price,
//     };

//     jsonData.push(formattedTransaction);

//     const newWorksheet = xlsx.utils.json_to_sheet(jsonData, { header: TRANSACTION_HEADERS });
//     workbook.Sheets["Transactions"] = newWorksheet;
//     xlsx.writeFile(workbook, excelFilePath);

//     return { success: true };
//   } catch (error) {
//     console.error("❌ Error writing transaction:", error);
//     return { success: false, error };
//   }
// });

// // ✅ IPC: Delete Transaction
// ipcMain.handle("delete-transaction", async (event, index) => {
//   try {
//     const workbook = xlsx.readFile(excelFilePath);
//     const worksheet = workbook.Sheets["Transactions"];
//     const rows = xlsx.utils.sheet_to_json(worksheet, { defval: "" });

//     if (index < 0 || index >= rows.length) return { success: false, error: "Invalid index" };

//     rows.splice(index, 1); // remove row
//     const newWorksheet = xlsx.utils.json_to_sheet(rows, { header: TRANSACTION_HEADERS });
//     workbook.Sheets["Transactions"] = newWorksheet;
//     xlsx.writeFile(workbook, excelFilePath);

//     return rows; // send back updated rows
//   } catch (error) {
//     console.error("❌ Error deleting transaction:", error);
//     return { success: false, error };
//   }
// });

// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");
// const fs = require("fs");
// const xlsx = require("xlsx");
// const { TRANSACTION_HEADERS } = require("../shared_config/transaction_config.js");

// // 🔑 File paths
// const transactionsFilePath = path.join(__dirname, "data", "transactions.xlsx");
// const summaryFilePath = path.join(__dirname, "data", "summary.xlsx");

// // ✅ Create browser window
// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1200,
//     height: 800,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   win.loadURL("http://localhost:3000"); // dev mode
// }

// // ✅ Ensure Transactions Excel file exists
// function ensureExcelFile() {
//   const dirPath = path.dirname(transactionsFilePath);
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true });
//   }

//   if (!fs.existsSync(transactionsFilePath)) {
//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.aoa_to_sheet([TRANSACTION_HEADERS]);
//     xlsx.utils.book_append_sheet(wb, ws, "Transactions");
//     xlsx.writeFile(wb, transactionsFilePath);
//   }
// }

// // ✅ Ensure Summary Excel file exists
// function ensureSummaryFile() {
//   const dirPath = path.dirname(summaryFilePath);
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true });
//   }

//   if (!fs.existsSync(summaryFilePath)) {
//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.aoa_to_sheet([[
//       "Stock Ticker",
//       "Name",
//       "Industry",
//       "Last Price",
//       "Shares",
//       "Cumulative Cost",
//       "Cost per share",
//       "Yield on Cost",
//       "Unrealized Gain/Loss",
//       "Realized Gain/Loss",
//       "Dividend Income",
//       "Portfolio %"
//     ]]);
//     xlsx.utils.book_append_sheet(wb, ws, "Summary");
//     xlsx.writeFile(wb, summaryFilePath);
//   }
// }

// // ✅ App ready → create files and window
// app.whenReady().then(() => {
//   ensureExcelFile();
//   ensureSummaryFile();
//   createWindow();
// });

// // ✅ IPC: Read Transactions
// ipcMain.handle("read-transactions", () => {
//   try {
//     if (!fs.existsSync(transactionsFilePath)) return [];
//     const wb = xlsx.readFile(transactionsFilePath);
//     const ws = wb.Sheets["Transactions"];
//     if (!ws) return [];
//     return xlsx.utils.sheet_to_json(ws, { defval: "" });
//   } catch (err) {
//     console.error("❌ Error reading Excel:", err);
//     return [];
//   }
// });

// // ✅ IPC: Write Transaction
// ipcMain.handle("write-transaction", async (event, transaction) => {
//   try {
//     const workbook = xlsx.readFile(transactionsFilePath);
//     const worksheet = workbook.Sheets["Transactions"];
//     const jsonData = xlsx.utils.sheet_to_json(worksheet);

//     const formattedTransaction = {
//       "Date": transaction.date,
//       "Stock Symbol": transaction.stockName,
//       "Type": transaction.type,
//       "Number of Units": transaction.units,
//       "Price per Share": transaction.price,
//     };

//     jsonData.push(formattedTransaction);

//     const newWorksheet = xlsx.utils.json_to_sheet(jsonData, { header: TRANSACTION_HEADERS });
//     workbook.Sheets["Transactions"] = newWorksheet;
//     xlsx.writeFile(workbook, transactionsFilePath);

//     return { success: true };
//   } catch (error) {
//     console.error("❌ Error writing transaction:", error);
//     return { success: false, error };
//   }
// });

// // ✅ IPC: Delete Transaction
// ipcMain.handle("delete-transaction", async (event, index) => {
//   try {
//     const workbook = xlsx.readFile(transactionsFilePath);
//     const worksheet = workbook.Sheets["Transactions"];
//     const rows = xlsx.utils.sheet_to_json(worksheet, { defval: "" });

//     if (index < 0 || index >= rows.length) return { success: false, error: "Invalid index" };

//     rows.splice(index, 1); // remove row
//     const newWorksheet = xlsx.utils.json_to_sheet(rows, { header: TRANSACTION_HEADERS });
//     workbook.Sheets["Transactions"] = newWorksheet;
//     xlsx.writeFile(workbook, transactionsFilePath);

//     return rows; // send back updated rows
//   } catch (error) {
//     console.error("❌ Error deleting transaction:", error);
//     return { success: false, error };
//   }
// });

// // ✅ IPC: Write Summaries
// ipcMain.handle("write-summaries", async (event, summaries) => {
//   try {
//     const wb = xlsx.utils.book_new();
//     const ws = xlsx.utils.json_to_sheet(summaries);
//     xlsx.utils.book_append_sheet(wb, ws, "Summary");
//     xlsx.writeFile(wb, summaryFilePath);

//     return { success: true, path: summaryFilePath };
//   } catch (error) {
//     console.error("❌ Error writing summary:", error);
//     return { success: false, error };
//   }
// });

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
const { TRANSACTION_HEADERS } = require("../shared_config/transaction_config.js");

// 🔑 File paths
const transactionsFilePath = path.join(__dirname, "data", "transactions.xlsx");
const summaryFilePath = path.join(__dirname, "data", "summary.xlsx");

// ✅ Create browser window
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000"); // dev mode
}

// ✅ Ensure Transactions Excel file exists
function ensureExcelFile() {
  const dirPath = path.dirname(transactionsFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(transactionsFilePath)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet([TRANSACTION_HEADERS]);
    xlsx.utils.book_append_sheet(wb, ws, "Transactions");
    xlsx.writeFile(wb, transactionsFilePath);
  }
}

// ✅ Ensure Summary Excel file exists
function ensureSummaryFile() {
  const dirPath = path.dirname(summaryFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(summaryFilePath)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.aoa_to_sheet([[
      "Stock Ticker",
      "Name",
      "Industry",
      "Last Price",
      "Shares",
      "Cumulative Cost",
      "Cost per share",
      "Yield on Cost",
      "Unrealized Gain/Loss",
      "Realized Gain/Loss",
      "Dividend Income",
      "Portfolio %"
    ]]);
    xlsx.utils.book_append_sheet(wb, ws, "Summary");
    xlsx.writeFile(wb, summaryFilePath);
  }
}

// ✅ App ready → create files and window
app.whenReady().then(() => {
  ensureExcelFile();
  ensureSummaryFile();
  createWindow();
});

// ✅ IPC: Read Transactions
ipcMain.handle("read-transactions", () => {
  try {
    if (!fs.existsSync(transactionsFilePath)) return [];
    const wb = xlsx.readFile(transactionsFilePath);
    const ws = wb.Sheets["Transactions"];
    if (!ws) return [];
    return xlsx.utils.sheet_to_json(ws, { defval: "" });
  } catch (err) {
    console.error("❌ Error reading Transactions Excel:", err);
    return [];
  }
});

// ✅ IPC: Write Transaction
ipcMain.handle("write-transaction", async (event, transaction) => {
  try {
    const workbook = xlsx.readFile(transactionsFilePath);
    const worksheet = workbook.Sheets["Transactions"];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    const formattedTransaction = {
      "Date": transaction.date,
      "Stock Symbol": transaction.stockName,
      "Type": transaction.type,
      "Number of Units": transaction.units,
      "Price per Share": transaction.price,
    };

    jsonData.push(formattedTransaction);

    const newWorksheet = xlsx.utils.json_to_sheet(jsonData, { header: TRANSACTION_HEADERS });
    workbook.Sheets["Transactions"] = newWorksheet;
    xlsx.writeFile(workbook, transactionsFilePath);

    return { success: true };
  } catch (error) {
    console.error("❌ Error writing transaction:", error);
    return { success: false, error };
  }
});

// ✅ IPC: Delete Transaction
ipcMain.handle("delete-transaction", async (event, index) => {
  try {
    const workbook = xlsx.readFile(transactionsFilePath);
    const worksheet = workbook.Sheets["Transactions"];
    const rows = xlsx.utils.sheet_to_json(worksheet, { defval: "" });

    if (index < 0 || index >= rows.length) return { success: false, error: "Invalid index" };

    rows.splice(index, 1); // remove row
    const newWorksheet = xlsx.utils.json_to_sheet(rows, { header: TRANSACTION_HEADERS });
    workbook.Sheets["Transactions"] = newWorksheet;
    xlsx.writeFile(workbook, transactionsFilePath);

    return rows; // send back updated rows
  } catch (error) {
    console.error("❌ Error deleting transaction:", error);
    return { success: false, error };
  }
});

// ✅ IPC: Write Summaries
ipcMain.handle("write-summaries", async (event, summaries) => {
  try {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(summaries);
    xlsx.utils.book_append_sheet(wb, ws, "Summary");
    xlsx.writeFile(wb, summaryFilePath);

    return { success: true, path: summaryFilePath };
  } catch (error) {
    console.error("❌ Error writing summary:", error);
    return { success: false, error };
  }
});

// ✅ IPC: Read Summaries (for Dashboard)
ipcMain.handle("read-summaries", async () => {
  try {
    if (!fs.existsSync(summaryFilePath)) return [];
    const wb = xlsx.readFile(summaryFilePath);
    const ws = wb.Sheets["Summary"];
    if (!ws) return [];
    return xlsx.utils.sheet_to_json(ws, { defval: "" });
  } catch (error) {
    console.error("❌ Error reading summary:", error);
    return [];
  }
});
