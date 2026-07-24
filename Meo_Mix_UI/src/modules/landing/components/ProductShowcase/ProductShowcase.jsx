import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FLAVORS } from '../../../../shared/constants/flavors';
import { Button } from '../../../../shared/components/Button/Button';
import styles from './ProductShowcase.module.scss';

export const ProductShowcase = () => {
  const showcaseItems = FLAVORS.slice(0, 4); // Top 4 showcase bottles

  return (
    <section className={`section-padding ${styles.showcaseSection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">SIGNATURE FLAVORS</div>
          <h2 className="heading-1">
            Crafted For Every <span className="gradient-text">Palette</span>
          </h2>
        </div>

        <div className={styles.itemList}>
          {showcaseItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`${styles.showcaseRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}
              >
                {/* Bottle Card Side */}
                <div className={styles.bottleSide}>
                  <div
                    className={styles.ambientGlow}
                    style={{ background: item.glowColor }}
                  />
                  <motion.img
                    whileHover={{ scale: 1.06, rotate: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    src={item.bottleImg}
                    alt={`${item.name} Bottle`}
                    className={styles.productBottleImg}
                  />
                </div>

                {/* Content Side */}
                <div className={styles.contentSide}>
                  <span className={styles.badge}>{item.badge}</span>
                  <h3 className={styles.productTitle}>{item.name}</h3>
                  <p className={styles.productTagline}>{item.tagline}</p>
                  <p className={styles.productDesc}>{item.description}</p>

                  <div className={styles.metricChips}>
                    <span>🥤 100% Juice Nectar</span>
                    <span>⚡ {item.nutrition.calories}</span>
                    <span>🌿 {item.nutrition.vitaminC}</span>
                  </div>

                  <Link to="/products">
                    <Button variant="outline" icon={FiArrowRight}>
                      Explore {item.name}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
