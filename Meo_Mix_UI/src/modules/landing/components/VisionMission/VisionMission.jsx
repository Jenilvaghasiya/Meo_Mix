import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './VisionMission.module.scss';

export const VisionMission = () => {
  const missionBulletPoints = [
    'Deliver authentic fruit taste in every bottle.',
    'Maintain the highest food safety & quality standards.',
    'Continuously innovate new vibrant flavours.',
    'Build long-term relationships with distributors & retailers.',
    'Expand globally while proudly representing Indian manufacturing.'
  ];

  return (
    <section className={styles.visionMissionSection}>
      <div className={styles.container}>

        {/* ROW 1: OUR MISSION (Text Left, Image Right) */}
        <div className={styles.zigZagRow}>
          {/* Mission Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textSideLeft}
          >
            <div className={styles.verticalAccentLine} />
            <div className={styles.textContent}>
              <h2 className={styles.rowTitle}>
                Our <span className={styles.accentText}>Mission</span>
              </h2>
              <p className={styles.rowDesc}>
                Our mission is to provide safe, refreshing, and high-quality fruit beverages that bring happiness to every consumer.
              </p>
              <div className={styles.striveHeader}>We strive to:</div>
              <ul className={styles.striveList}>
                {missionBulletPoints.map((point, idx) => (
                  <li key={idx} className={styles.striveItem}>
                    <FiCheckCircle className={styles.checkIcon} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.imageSideRight}
          >
            <div className={styles.offsetBorderFrameTopRight} />
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80"
                alt="Meo Mix Mission - Refreshing Toast"
                className={styles.rowImage}
              />
            </div>
          </motion.div>
        </div>

        {/* ROW 2: OUR VISION (Image Left, Text Right) */}
        <div className={`${styles.zigZagRow} ${styles.reverseRow}`}>
          {/* Vision Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.imageSideLeft}
          >
            <div className={styles.offsetBorderFrameBottomLeft} />
            <div className={styles.imageCard}>
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80"
                alt="Meo Mix Vision - Joyous Moments"
                className={styles.rowImage}
              />
            </div>
          </motion.div>

          {/* Vision Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textSideRight}
          >
            <div className={styles.verticalAccentLineRight} />
            <div className={styles.textContent}>
              <h2 className={styles.rowTitle}>
                Our <span className={styles.accentText}>Vision</span>
              </h2>
              <p className={styles.rowDesc} style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                To become one of India’s most trusted fruit beverage brands by delivering exceptional quality, innovation, and customer satisfaction while expanding our presence across global markets.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
