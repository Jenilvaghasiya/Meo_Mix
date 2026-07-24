import React from 'react';
import { motion } from 'framer-motion';
import styles from './VisionMission.module.scss';

export const VisionMission = () => {
  return (
    <section className={styles.visionMissionSection}>
      <div className={styles.container}>

        {/* Row 1: Our Mission (Text Left, Image Right) */}
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
                At MEO MIX, our mission is to deliver the highest quality products using the finest ingredients and innovative processes, continuously exploring new flavors and methods to keep our offerings exciting and relevant, while prioritizing health and wellness to support our customers' active and balanced lifestyles. Together, we strive to refresh, inspire, and make a positive impact on the world, one sip at a time.
              </p>
            </div>
          </motion.div>

          {/* Mission Image Block (Top-Right Offset Border Frame) */}
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

        {/* Row 2: Our Vision (Image Left, Text Right) */}
        <div className={`${styles.zigZagRow} ${styles.reverseRow}`}>
          {/* Vision Image Block (Bottom-Left Offset Border Frame) */}
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
              <p className={styles.rowDesc}>
                At MEO MIX, our vision is to be the beacon of refreshment, inspiring joyous moments and unforgettable experiences. We aspire to be the preferred choice for individuals seeking innovative and delightful beverages that not only quench their thirst but elevate their spirits.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
