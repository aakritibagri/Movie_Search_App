import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Movie search form">
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Movie title"
      />
      <button type="submit" aria-label="Search movies">Search</button>
    </form>
  );
};

export default SearchBar;
