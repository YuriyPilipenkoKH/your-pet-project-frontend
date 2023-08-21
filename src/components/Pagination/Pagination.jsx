import React from 'react';
import { Pagination } from 'react-bootstrap'
import { PaginationCont } from './Pagination.styled';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <PaginationCont>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          
        ))}
      </Pagination>
    </PaginationCont>
  );
};

export default CustomPagination;