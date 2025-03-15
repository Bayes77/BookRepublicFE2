'use client';

import React, { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar-container">
        <input style={{ width: '600px', display: 'block', margin: '0 auto', borderRadius: '7px', marginTop: '15px' }} type="search" placeholder="Search" onChange={handleChange} className="search-input" />
      </div>
      <imput type="text" placeholder="Search.." value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
