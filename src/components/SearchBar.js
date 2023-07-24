import React, { useState } from 'react';

const SearchBar = ({ onSort }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
    onSort(selectedSort); // Pass the selected sort value to the parent component
  };

  return (
    <div>
      <label>Sort By: </label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Select...</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
};

export default SearchBar;
