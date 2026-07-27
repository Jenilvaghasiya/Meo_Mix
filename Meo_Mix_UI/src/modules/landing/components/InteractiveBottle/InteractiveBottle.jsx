import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FLAVORS } from '../../../../shared/constants/flavors';
import styles from './InteractiveBottle.module.scss';

export const InteractiveBottle = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.8, 1.15, 0.9]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.9], [-15, 15]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 0.9, 0.3]);

  return (
    <section ref={targetRef} className={`section-padding ${styles.interactiveSection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">3D PRODUCT SHOWCASE</div>
          <h2 className="heading-1">
            Engineered For <span className="gradient-text">Perfection</span>
          </h2>
          <p className={styles.subtext}>
            Scroll to observe the precision ergonomic design and light refractions of the official Meo Mix bottle asset.
          </p>
        </div>

        <div className={styles.stage}>
          <motion.div
            style={{ opacity: glowOpacity }}
            className={styles.stageGlow}
          />

          <motion.div
            style={{ scale, rotate }}
            className={styles.bottleCenterHolder}
          >
            <img
              src="/products/mango_bottle.webp"
              alt="Meo Mix Interactive 3D Showcase Bottle"
              className={styles.stageBottleImg}
            />
          </motion.div>

          {/* Floating Feature Hotspots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${styles.hotspot} ${styles.hotspotLeft1}`}
          >
            <span className={styles.pinDot} />
            <div className={styles.hotspotCard}>
              <h5>Ergonomic Grip</h5>
              <p>Designed for easy handling on-the-go.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${styles.hotspot} ${styles.hotspotRight1}`}
          >
            <span className={styles.pinDot} />
            <div className={styles.hotspotCard}>
              <h5>Aseptic Seal</h5>
              <p>Locks in rich fruit flavor and freshness.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
