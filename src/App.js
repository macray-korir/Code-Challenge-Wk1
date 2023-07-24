import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('');

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

    // Function to handle sorting transactions
    const handleSort = (sortType) => {
      setSortType(sortType);
    };
  
   // Sort transactions based on sortType
   useEffect(() => {
    let sortedTransactions = [...transactions];
    if (sortType === 'category') {
      sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortType === 'description') {
      sortedTransactions.sort((a, b) => a.description.localeCompare(b.description));
    }
    setTransactions(sortedTransactions);
  }, [transactions, sortType]);


  return (
    <div>
      <h1>Recent Bank Transactions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar onSort={handleSort} />
          <TransactionTable transactions={transactions} />
          <TransactionForm setTransactions={setTransactions} />
        </>
      )}
    </div>
  );
};


export default App;