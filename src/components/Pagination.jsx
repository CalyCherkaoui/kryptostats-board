import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

const Pagination = ({ count, fetchData }) => (
  <div className="pagination_container">
    <ReactPaginate
      pageCount={Math.ceil(count / 6)}
      pageRangeDisplayed={1}
      marginPagesDisplayed={2}
      onPageChange={fetchData()}
    />
  </div>
);

Pagination.propTypes = ({
  count: PropTypes.number,
  fetchData: PropTypes.func,
}).isRequired;

export default Pagination;
