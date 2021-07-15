/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  return (
    <div className="search_bar_container">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button type="button" onClick={() => props.history.push(`/coininfo/${search}`)}>Search</button>
    </div>
  );
};

export default withRouter(SearchBar);
