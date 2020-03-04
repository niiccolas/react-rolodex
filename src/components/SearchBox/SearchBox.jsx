import React from 'react';

import './SearchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="SearchBox__input"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
