import React from 'react';
import styles from './Input.module.scss';

export const Input = ({
  label,
  error,
  icon: Icon,
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.inputGroup} ${error ? styles.hasError : ''} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.inputIcon} />}
        <input
          type={type}
          className={`${styles.input} ${Icon ? styles.hasIcon : ''}`}
          {...props}
        />
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
