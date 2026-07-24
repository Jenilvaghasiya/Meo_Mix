import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useFlavor } from '../../context/FlavorContext';
import styles from './CustomCursor.module.scss';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const { cursorText } = useFlavor();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [data-interactive="true"]');
      setIsPointer(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isPointer ? 1.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      <motion.div
        className={styles.cursorRing}
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        {cursorText && <span className={styles.cursorLabel}>{cursorText}</span>}
      </motion.div>
    </>
  );
};
