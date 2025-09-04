// import React, { useState } from "react";
// import TransactionsForm from "../forms/TransactionsForm";
// import TransactionTable from "../tables/TransactionTable";

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//   };

//   const handleDelete = (index) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this transaction?"
//   );
//   if (confirmDelete) {
//     setTransactions(transactions.filter((_, i) => i !== index));
//   }
// };


//   return (
//     <>
//       <TransactionsForm addTransaction={addTransaction} />
//       {/* Pass the delete handler to the table */}
//       <TransactionTable transactions={transactions} onDelete={handleDelete} />
//     </>
//   );
// }

// export default Transactions;

// import React, { useState, useEffect } from "react";
// import TransactionsForm from "../forms/TransactionsForm";
// import TransactionTable from "../tables/TransactionTable";

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   // ✅ Define fetchTransactions once, so we can reuse
//   const fetchTransactions = async () => {
//     console.log("🔄 Fetching transactions from Excel...");
//     try {
//       const rows = await window.electronAPI.readTransactions();
//       console.log("📊 Transactions loaded:", rows);
//       setTransactions(rows);
//     } catch (error) {
//       console.error("❌ Error fetching transactions:", error);
//     }
//   };

//   // Load data on first render
//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   // Add transaction + reload
//   const addTransaction = async (transaction) => {
//     console.log("➕ Adding transaction:", transaction);
//     try {
//       await window.electronAPI.writeTransaction(transaction);
//       await fetchTransactions(); // reload after saving
//     } catch (err) {
//       console.error("❌ Failed to add transaction:", err);
//     }
//   };

//   // Delete transaction (frontend only for now)
//   const handleDelete = (index) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this transaction?"
//     );
//     if (confirmDelete) {
//       console.log("🗑️ Deleting transaction at index:", index);
//       setTransactions(transactions.filter((_, i) => i !== index));
//     }
//   };

//   console.log("📦 Transactions state before render:", transactions);

//   return (
//     <>
//       <TransactionsForm addTransaction={addTransaction} />
//       <TransactionTable transactions={transactions} onDelete={handleDelete} />
//     </>
//   );
// }

// export default Transactions;

// import React, { useState, useEffect } from "react";
// import TransactionsForm from "../forms/TransactionsForm";
// import TransactionTable from "../tables/TransactionTable";
// import { TRANSACTION_HEADERS } from "../../shared/transaction_config.js";




// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   const fetchTransactions = async () => {
//     console.log("🔄 Fetching transactions from Excel...");
//     try {
//       const rows = await window.electronAPI.readTransactions();
//       console.log("📊 Transactions loaded:", rows);
//       setTransactions(rows);
//     } catch (error) {
//       console.error("❌ Error fetching transactions:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const addTransaction = async (transaction) => {
//     console.log("➕ Adding transaction:", transaction);
//     try {
//       await window.electronAPI.writeTransaction(transaction);
//       await fetchTransactions();
//     } catch (err) {
//       console.error("❌ Failed to add transaction:", err);
//     }
//   };

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this transaction?")) {
//       console.log("🗑️ Deleting transaction at index:", index);
//       setTransactions(transactions.filter((_, i) => i !== index));
//     }
//   };

//   console.log("📦 Transactions state before render:", transactions);

//   return (
//     <>
//       <TransactionsForm addTransaction={addTransaction} />
//       <TransactionTable
//         headers={TRANSACTION_HEADERS}   // ✅ pass headers
//         transactions={transactions}
//         onDelete={handleDelete}
//       />
//     </>
//   );
// }

// export default Transactions;

import React, { useState, useEffect } from "react";
import TransactionsForm from "../forms/TransactionsForm";
import TransactionTable from "../tables/TransactionTable";
import { TRANSACTION_HEADERS } from "../../shared_config/transaction_config.js";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const rows = await window.electronAPI.readTransactions();
      setTransactions(rows);
    } catch (error) {
      console.error("❌ Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    try {
      await window.electronAPI.writeTransaction(transaction);
      await fetchTransactions();
    } catch (err) {
      console.error("❌ Failed to add transaction:", err);
    }
  };

  const handleDelete = async (index) => {
  if (!window.confirm("Are you sure you want to delete this transaction?")) return;

  try {
    const updatedRows = await window.electronAPI.deleteTransaction(index);

    // If the IPC returned {success: false}, log error
    if (!Array.isArray(updatedRows)) {
      console.error("❌ Failed to delete transaction:", updatedRows.error);
      return;
    }

    // ✅ Update frontend state
    setTransactions(updatedRows);
  } catch (err) {
    console.error("❌ Error deleting transaction:", err);
  }
};


  return (
    <>
      <TransactionsForm addTransaction={addTransaction} />
      <TransactionTable
        headers={TRANSACTION_HEADERS}
        transactions={transactions}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Transactions;
