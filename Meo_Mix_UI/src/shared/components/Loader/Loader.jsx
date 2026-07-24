import React from 'react';
import styles from './Loader.module.scss';

export const Loader = ({ size = 'md', text = 'Loading...' }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.innerRing} />
      </div>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
