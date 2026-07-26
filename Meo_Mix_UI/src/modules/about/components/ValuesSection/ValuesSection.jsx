import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiHeart, FiRefreshCw, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import styles from './ValuesSection.module.scss';

export const ValuesSection = () => {
  const values = [
    { title: 'Integrity', desc: 'Operating with uncompromised honesty and transparency in every batch.', icon: FiShield },
    { title: 'Quality', desc: 'Strict raw material selection and food safety compliance from seed to bottle.', icon: FiCheckCircle },
    { title: 'Innovation', desc: 'Continuous research in flavour development and aseptic cold-chain tech.', icon: FiRefreshCw },
    { title: 'Customer First', desc: 'Delivering refreshing taste, health, and satisfaction to every consumer.', icon: FiHeart },
    { title: 'Teamwork', desc: 'Empowering employees, distributors, and retail partners nationwide.', icon: FiUsers },
    { title: 'Sustainability', desc: 'Responsible resource usage and eco-friendly manufacturing practices.', icon: FaLeaf },
    { title: 'Continuous Improvement', desc: 'Constant optimization of manufacturing, packaging, and logistics.', icon: FiTrendingUp }
  ];

  const sustainabilityPillars = [
    'Efficient & Responsible Manufacturing',
    'Optimized Resource Usage',
    'Continuous Process & Technology Improvement',
    'Customer Health, Safety & Wellbeing'
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        {/* Corporate Values Header */}
        <div className={styles.header}>
          <div className="glass-pill">OUR FOUNDATION</div>
          <h2 className="heading-1">
            Corporate <span className="gradient-text">Values & Sustainability</span>
          </h2>
          <p className={styles.subtext}>
            Guided by strong principles and responsible manufacturing practices supporting a healthier future.
          </p>
        </div>

        {/* Corporate Values Grid */}
        <div className={styles.valuesGrid}>
          {values.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={styles.valueCard}
              >
                <div className={styles.iconWrap}>
                  <IconComp />
                </div>
                <h3 className={styles.valueTitle}>{item.title}</h3>
                <p className={styles.valueDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Sustainability Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.sustainabilityCard}
        >
          <div className={styles.sustHeader}>
            <FaLeaf className={styles.leafIcon} />
            <div>
              <h3 className={styles.sustTitle}>Commitment to Sustainability</h3>
              <p className={styles.sustSub}>We believe in responsible manufacturing practices that support a healthier future.</p>
            </div>
          </div>

          <div className={styles.pillarsGrid}>
            {sustainabilityPillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarItem}>
                <FiCheckCircle className={styles.checkIcon} />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
