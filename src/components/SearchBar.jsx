import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBar.module.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.search_bar_container}>
      <input className={`${styles.search_bar_input} normal_typography`} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Crypto" />
      <button className={styles.search_bar_button} type="button" onClick={() => props.history.push(`/coininfo/${search}`)}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(SearchBar);
