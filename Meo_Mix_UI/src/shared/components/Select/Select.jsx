import React from 'react';
import styles from './Select.module.scss';

export const Select = ({
  label,
  options = [],
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.selectGroup} ${error ? styles.hasError : ''} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectWrapper}>
        <select className={styles.select} {...props}>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className={styles.arrow}>▾</span>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
