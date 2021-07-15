/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  // const goToSerchedCoin = () => {
  //   props.history.push(`/coininfo/${search}`);
  // };
  return (
    <div className="search_bar_container">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button type="button" onClick={() => props.history.push(`/coininfo/${search}`)}>Search</button>
    </div>
  );
};

// SearchBar.propTypes = {
//   history: PropTypes.arrayOf.isRequired,
// };

export default SearchBar;
