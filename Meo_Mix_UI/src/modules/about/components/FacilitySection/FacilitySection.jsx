import React from 'react';
import { motion } from 'framer-motion';
import styles from './FacilitySection.module.scss';

export const FacilitySection = () => {
  return (
    <section className={styles.facilitySection}>
      <div className={styles.container}>
        {/* Welcome & Product Showcase */}
        <div className={styles.grid}>
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.textCol}
          >
            <h2 className={styles.welcomeTitle}>
              Welcome to <br />
              <span className={styles.brandHighlight}>MEO MIX</span>
            </h2>
            <p className={styles.welcomeSubtext}>
              Where quality meets passion, and every sip is a testament to our dedication to a healthier, tastier world. Made using quality fruit pulp, premium ingredients, and strict food safety standards.
            </p>
          </motion.div>

          {/* Right Product Lineup Frame (With All_In_One.png Image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={styles.imageCol}
          >
            <div className={styles.facilityFrameWrapper}>
              <div className={styles.facilityImageCard}>
                <img
                  src="/products/All_In_One.png"
                  alt="MEO MIX Complete Beverage Range"
                  className={styles.facilityImg}
                />
                <div className={styles.plantOverlayBadge}>
                  <span>MEO MIX Beverage Collection</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
