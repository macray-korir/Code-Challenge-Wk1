import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch transactions data from the server
  useEffect(() => {
    axios
      .get('http://localhost:3001/transactions')
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Recent Bank Transactions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar />
          <TransactionTable transactions={transactions} />
          <TransactionForm setTransactions={setTransactions} />
        </>
      )}
    </div>
  );
};

export default App;