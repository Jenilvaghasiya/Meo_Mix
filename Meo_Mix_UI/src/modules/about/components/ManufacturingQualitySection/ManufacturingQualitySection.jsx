import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiSettings } from 'react-icons/fi';
import styles from './ManufacturingQualitySection.module.scss';

export const ManufacturingQualitySection = () => {
  const manufacturingPoints = [
    'Superior Taste',
    'Food Safety',
    'Consistent Quality',
    'Hygienic Packaging',
    'Customer Satisfaction'
  ];

  const qualityPoints = [
    'Premium Raw Materials',
    'Strict Hygiene Standards',
    'Food Safety Compliance',
    'Consistent Product Quality',
    'Customer Satisfaction'
  ];

  return (
    <section className={styles.mfgQualitySection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className="glass-pill">WORLD-CLASS STANDARDS</div>
          <h2 className="heading-1">
            Manufacturing Excellence & <span className="gradient-text">Quality Assurance</span>
          </h2>
          <p className={styles.subtext}>
            Our modern automated manufacturing facility is equipped with advanced technology and follows strict quality control procedures from raw material selection to final dispatch.
          </p>
        </div>

        {/* 2 Grid Cards */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Manufacturing Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.featureCard}
          >
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconCircle} style={{ background: '#EEF6FF', color: '#0D5C9F' }}>
                <FiSettings />
              </div>
              <h3 className={styles.cardTitle}>Manufacturing Excellence</h3>
            </div>
            <p className={styles.cardDesc}>
              Our manufacturing facility is equipped with modern technology and follows strict quality control procedures throughout production.
            </p>
            <div className={styles.bulletHeader}>Every stage is carefully monitored to ensure:</div>
            <ul className={styles.bulletList}>
              {manufacturingPoints.map((pt, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <FiCheckCircle className={styles.checkIcon} style={{ color: '#0D5C9F' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={styles.featureCard}
          >
            <div className={styles.cardHeaderRow}>
              <div className={styles.iconCircle} style={{ background: '#E8F7EA', color: '#39B54A' }}>
                <FiShield />
              </div>
              <h3 className={styles.cardTitle}>Quality Assurance</h3>
            </div>
            <p className={styles.cardDesc}>
              Quality is at the heart of everything we do. Each product undergoes rigorous quality checks before reaching our customers.
            </p>
            <div className={styles.bulletHeader}>We are committed to:</div>
            <ul className={styles.bulletList}>
              {qualityPoints.map((pt, idx) => (
                <li key={idx} className={styles.bulletItem}>
                  <FiCheckCircle className={styles.checkIcon} style={{ color: '#39B54A' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
