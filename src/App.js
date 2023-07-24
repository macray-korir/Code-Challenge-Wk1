import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('');

  // Fetch transactions data from the server
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
        setLoading(false);
      });
  }, []);

  // Function to handle sorting transactions
  const handleSort = (sortType) => {
    setSortType(sortType);
  };

  // Function to sort transactions based on sortType
  const getSortedTransactions = (sortType) => {
    let sortedTransactions = [...transactions];
    if (sortType === 'category') {
      sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortType === 'description') {
      sortedTransactions.sort((a, b) => a.description.localeCompare(b.description));
    }
    return sortedTransactions;
  };

  return (
    <div>
      <h1>Recent Bank Transactions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar onSort={handleSort} />
          <TransactionTable transactions={getSortedTransactions(sortType)} />
          <TransactionForm setTransactions={setTransactions} />
        </>
      )}
    </div>
  );
};

export default App;
