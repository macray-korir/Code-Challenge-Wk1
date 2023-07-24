import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // TODO: Filter transactions and pass the filtered transactions to the TransactionTable (core deliverable)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions by description..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
