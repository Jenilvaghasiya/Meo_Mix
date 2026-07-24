import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'glass'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className={styles.content}>
        {Icon && iconPosition === 'left' && <Icon className={styles.iconLeft} />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className={styles.iconRight} />}
      </span>
      <span className={styles.ripple} />
    </motion.button>
  );
};
