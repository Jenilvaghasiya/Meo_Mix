import React from 'react';
import styles from './Table.module.scss';

export const Table = ({ headers = [], data = [], className = '' }) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>
      {/* Desktop Table View */}
      <table className={styles.desktopTable}>
        <thead>
          <tr>
            {headers.map((h, idx) => (
              <th key={idx}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rIdx) => (
              <tr key={rIdx}>
                {Object.values(row).map((cell, cIdx) => (
                  <td key={cIdx}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length || 1} className={styles.empty}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Mobile Glass Cards View (100% Mobile Responsive) */}
      <div className={styles.mobileCardsList}>
        {data.map((row, rIdx) => {
          const values = Object.values(row);
          return (
            <div key={rIdx} className={styles.mobileCard}>
              <div className={styles.cardHeaderTile}>
                <span className={styles.tierBadge}>{values[0]}</span>
              </div>
              <div className={styles.cardGridBody}>
                {headers.slice(1).map((headerLabel, idx) => (
                  <div key={idx} className={styles.metaRow}>
                    <span className={styles.metaLabel}>{headerLabel}</span>
                    <span className={styles.metaValue}>{values[idx + 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
