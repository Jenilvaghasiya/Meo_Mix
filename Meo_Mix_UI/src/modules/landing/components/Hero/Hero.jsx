import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiSun, FiZap, FiHeart, FiDroplet, FiAward } from 'react-icons/fi';
import { GiOrangeSlice, GiLemon, GiPineapple, GiWatermelon, GiShinyApple, GiLeafSkeleton, GiFruitBowl } from 'react-icons/gi';
import { useFlavor } from '../../../../shared/context/FlavorContext';
import { Button } from '../../../../shared/components/Button/Button';
import styles from './Hero.module.scss';

const FLAVOR_FRUIT_BADGES = {
  mango: ['🥭', '✨', '🍃'],
  lychee: ['🍒', '✨', '🍃'],
  orange: ['🍊', '✨', '🍃'],
  pineapple: ['🍍', '✨', '🍃'],
  guava: ['🍐', '✨', '🍃'],
  pomegranate: ['🍷', '✨', '🍃'],
  muskmelon: ['🍈', '✨', '🍃'],
  nimbu: ['🍋', '✨', '🍃']
};

export const Hero = () => {
  const { flavors, selectFlavor, activeFlavor } = useFlavor();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const heroWords = [
    'REFRESH',
    'RECHARGE',
    'REVITALIZE',
    'DELIGHT',
    'PARADISE',
    'ROYALTY',
    'HYDRATE',
    'COOLNESS'
  ];

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 15 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const bottleRotateX = useTransform(dy, [-300, 300], [10, -10]);
  const bottleRotateY = useTransform(dx, [-300, 300], [-10, 10]);
  const bottleTranslateX = useTransform(dx, [-300, 300], [-15, 15]);
  const bottleTranslateY = useTransform(dy, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Continuous Auto-play interval - 5000ms speed (5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % flavors.length;
    setCurrentIndex(nextIdx);
    selectFlavor(flavors[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + flavors.length) % flavors.length;
    setCurrentIndex(prevIdx);
    selectFlavor(flavors[prevIdx].id);
  };

  const currentFlavor = flavors[currentIndex] || activeFlavor;
  const slideNumberFormatted = String(currentIndex + 1).padStart(2, '0');
  const bgWord = heroWords[currentIndex % heroWords.length];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.heroSection}
      style={{
        background: currentFlavor.solidBg || '#2A65F0'
      }}
    >
      {/* Liquid Wave Ripple Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.liquidRippleBg}
          style={{ background: currentFlavor.glowColor }}
        />
      </AnimatePresence>

      {/* Floating Fruit Glass Badges (Matching Each Specific Fruit) */}
      <div className={styles.flyingParticlesContainer}>
        {(FLAVOR_FRUIT_BADGES[currentFlavor.id] || ['🍊', '✨', '🍃']).map((badgeText, idx) => (
          <motion.span
            key={`${currentIndex}-${idx}`}
            className={`${styles.flyingParticle} ${styles[`particle${idx + 1}`]}`}
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{
              opacity: [0.85, 1, 0.85],
              scale: [1, 1.15, 1],
              rotate: [45, 0, -15]
            }}
            transition={{
              duration: 2.5 + idx,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: idx * 0.15
            }}
          >
            <span className={styles.badgeGlassCircle}>{badgeText}</span>
          </motion.span>
        ))}
      </div>

      {/* Hero Backdrop Text */}
      <div className={styles.backdropWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.backdropTextHolder}
          >
            <div className={styles.wordWithNumber}>
              <span className={styles.slideNumber}>{slideNumberFormatted}</span>
              <span className={styles.backdropWord}>{bgWord}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Center Hero Canvas with Bottle */}
      <div className={styles.container}>
        <div className={styles.bottleWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                rotateX: bottleRotateX,
                rotateY: bottleRotateY,
                x: bottleTranslateX,
                y: bottleTranslateY,
                transformStyle: 'preserve-3d'
              }}
              className={styles.bottleHolder}
            >
              <motion.div
                className={styles.bottleGlow}
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src={currentFlavor.bottleImg}
                alt={`${currentFlavor.name} Bottle`}
                className={styles.heroBottleImg}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Left Subtitle Text (Exact Favrito Style) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`sub-${currentIndex}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.4 }}
          className={styles.bottomSubtitle}
        >
          <p>
            Survive this Summer with our <br />
            refreshing drink <strong>{currentFlavor.name}</strong>
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Left Side Navigation Arrow */}
      <button
        className={`${styles.sideNavBtn} ${styles.leftNavBtn}`}
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <FiChevronLeft />
      </button>

      {/* Right Side Navigation Arrow */}
      <button
        className={`${styles.sideNavBtn} ${styles.rightNavBtn}`}
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <FiChevronRight />
      </button>
    </section>
  );
};
