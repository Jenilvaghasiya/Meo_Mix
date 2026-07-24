import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiHeart, FiTrendingUp, FiTarget, FiCompass } from 'react-icons/fi';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  const stats = [
    { label: 'Quality Fruit Taste', value: 'Premium', icon: FiHeart },
    { label: 'Cities Served', value: '50+', icon: FiTrendingUp },
    { label: 'Bottles Delivered', value: '10M+', icon: FiAward },
    { label: 'Dealer Partners', value: '500+', icon: FiShield }
  ];

  return (
    <section className={`section-padding ${styles.aboutSection}`}>
      <div className={styles.container}>
        <div className={styles.splitGrid}>
          {/* Left Visual Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.visualCard}
          >
            <div className={styles.imageOverlay}>
              <img
                src="/logo/Fruits.png"
                alt="Meo Mix Fresh Fruits"
                className={styles.heroFruitImg}
              />
              <div className={styles.glassBadge}>
                <span className={styles.badgeNumber}>Premium</span>
                <span className={styles.badgeText}>Fruit Taste Goodness</span>
              </div>
            </div>
          </motion.div>

          {/* Right Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <div className="glass-pill">OUR HERITAGE & PASSION</div>
            <h2 className="heading-1">
              Authentic Fruit Taste, <br />
              <span className="gradient-text">Uncompromising Quality.</span>
            </h2>

            <p className={styles.leadText}>
              Meo Mix Juice is a premium fruit-based beverage brand offering refreshing taste and quality in every sip. Made with carefully selected fruits and modern processing, Meo Mix delivers a perfect blend of flavor, freshness, and trust.
            </p>

            <p className={styles.subText}>
              Every bottle undergoes cold-press fruit extraction and ultra-hygienic aseptic bottling to safeguard essential vitamins, vibrant colors, and rich aromas.
            </p>

            {/* Animated Counters Grid */}
            <div className={styles.statsGrid}>
              {stats.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className={styles.statCard}>
                    <div className={styles.statIcon}>
                      <IconComp />
                    </div>
                    <span className={styles.statValue}>{st.value}</span>
                    <span className={styles.statLabel}>{st.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
