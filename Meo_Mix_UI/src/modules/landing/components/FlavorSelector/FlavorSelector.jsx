import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useFlavor } from '../../../../shared/context/FlavorContext';
import styles from './FlavorSelector.module.scss';

export const FlavorSelector = () => {
  const { activeFlavor, selectFlavor, flavors } = useFlavor();
  const [sliderIdx, setSliderIdx] = useState(0);

  // Auto-play timer for slider index (2500ms interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIdx((prevIdx) => (prevIdx + 1) % flavors.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [flavors.length]);

  // Sync selected flavor in context whenever sliderIdx changes
  useEffect(() => {
    if (flavors[sliderIdx]) {
      selectFlavor(flavors[sliderIdx].id);
    }
  }, [sliderIdx, flavors, selectFlavor]);

  const handleNext = () => {
    setSliderIdx((prevIdx) => (prevIdx + 1) % flavors.length);
  };

  const handlePrev = () => {
    setSliderIdx((prevIdx) => (prevIdx - 1 + flavors.length) % flavors.length);
  };

  const currentSliderFlavor = flavors[sliderIdx] || activeFlavor;

  return (
    <section
      id="flavor-selector-section"
      className={styles.referenceSliderSection}
      style={{ background: currentSliderFlavor.solidBg || '#4A90E2' }}
    >
      <div className={styles.sliderContainer}>
        {/* Left Text Block */}
        <div className={styles.leftTextBlock}>
          <h2 className={styles.headline}>
            Just relax,and go with the flow
          </h2>
          <p className={styles.subParagraph}>
            Our refreshing fruit-infused drink is the perfect choice. Indulge in a moment of delight and let the vibrant fruit flavors awaken your senses.
          </p>

          {/* All 8 Flavor Quick Selector Buttons */}
          <div className={styles.allFlavorsBar}>
            {flavors.map((f, idx) => {
              const isActive = idx === sliderIdx;
              return (
                <button
                  key={f.id}
                  onClick={() => {
                    setSliderIdx(idx);
                    selectFlavor(f.id);
                  }}
                  className={`${styles.flavorPillBtn} ${isActive ? styles.activePill : ''}`}
                >
                  <span>{f.name}</span>
                </button>
              );
            })}
          </div>

          <Link to="/products" className={styles.viewAllBtn}>
            View All Range
          </Link>
        </div>

        {/* Right Carousel Slider Cards with Shadow Box Styling */}
        <div className={styles.carouselWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={sliderIdx}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={styles.carouselTrack}
            >
              {[0, 1, 2].map((offset) => {
                const itemIdx = (sliderIdx + offset) % flavors.length;
                const item = flavors[itemIdx];
                const isMain = offset === 0;

                return (
                  <div
                    key={`${item.id}-${offset}`}
                    className={`${styles.carouselCard} ${isMain ? styles.mainCard : ''}`}
                    onClick={() => {
                      setSliderIdx(itemIdx);
                      selectFlavor(item.id);
                    }}
                  >
                    {/* Circular Next Button on top of slide */}
                    {isMain && (
                      <button
                        className={styles.nextCircleBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        aria-label="Next Flavor"
                      >
                        Next
                      </button>
                    )}

                    {/* Center Bottle */}
                    <div className={styles.bottleHolder}>
                      <motion.img
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        src={item.bottleImg}
                        alt={item.name}
                        className={styles.sliderBottleImg}
                      />
                    </div>

                    {/* Bottom Metadata (Favrito Style) */}
                    <div className={styles.cardBottomMeta}>
                      <h3 className={styles.productTitle}>
                        MEO MIX {item.name.toUpperCase()} – 160ML
                      </h3>
                      <div className={styles.underlineDivider} />
                      <div className={styles.priceRow}>
                        <span className={styles.priceTag}>Rs. 10</span>
                        <span className={styles.badgePill}>{item.badge}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls & 8 Dots Indicator */}
          <div className={styles.bottomSliderRow}>
            <div className={styles.flavorDots}>
              {flavors.map((f, i) => (
                <span
                  key={f.id}
                  onClick={() => {
                    setSliderIdx(i);
                    selectFlavor(f.id);
                  }}
                  className={`${styles.dot} ${i === sliderIdx ? styles.activeDot : ''}`}
                />
              ))}
            </div>

            <div className={styles.sliderControls}>
              <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
                <FiChevronLeft />
              </button>
              <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
