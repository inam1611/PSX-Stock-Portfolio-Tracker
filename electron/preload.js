// // electron/preload.js
// const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld("electronAPI", {
//   readTransactions: () => ipcRenderer.invoke("read-transactions"),
//   writeTransaction: (transaction) => ipcRenderer.invoke("write-transaction", transaction),
// });

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  readTransactions: () => ipcRenderer.invoke("read-transactions"),
  writeTransaction: (transaction) => ipcRenderer.invoke("write-transaction", transaction),
  deleteTransaction: (index) => ipcRenderer.invoke("delete-transaction", index), // ✅
});




