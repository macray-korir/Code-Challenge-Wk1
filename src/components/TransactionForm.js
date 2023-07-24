import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = ({ setTransactions }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      date,
      description,
      amount: parseFloat(amount),
    };

    // Clear the form fields
    setDate('');
    setDescription('');
    setAmount('');

    // Update state to add the newTransaction to the transactions array
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

    // TODO: Send the newTransaction to the backend using axios (bonus deliverable)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
