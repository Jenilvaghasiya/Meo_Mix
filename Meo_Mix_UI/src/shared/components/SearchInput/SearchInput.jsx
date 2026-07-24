import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './SearchInput.module.scss';

export const SearchInput = ({ value, onChange, onClear, placeholder = 'Search flavors, products...', className = '' }) => {
  return (
    <div className={`${styles.searchBox} ${className}`}>
      <FiSearch className={styles.searchIcon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {value && (
        <button onClick={onClear} className={styles.clearBtn}>
          <FiX />
        </button>
      )}
    </div>
  );
};
