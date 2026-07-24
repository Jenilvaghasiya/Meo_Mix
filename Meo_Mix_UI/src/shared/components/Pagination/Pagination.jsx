import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={styles.pageBtn}
      >
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`${styles.pageBtn} ${currentPage === p ? styles.active : ''}`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={styles.pageBtn}
      >
        ›
      </button>
    </div>
  );
};
