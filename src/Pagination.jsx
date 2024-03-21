import React, { useState } from 'react';
import './Pagination.css'; // Import CSS file for styling

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handleClick(i)}>{i}</button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default Pagination;
