import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiHeart, FiTag, FiZap, FiSettings } from 'react-icons/fi';
import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  const features = [
    {
      title: 'Authentic Fruit Flavor',
      desc: 'Pressed directly from sun-ripened orchard fruits without artificial flavors or high-fructose corn syrups.',
      icon: FiHeart
    },
    {
      title: 'Premium Ingredients',
      desc: 'Sourced from certified sustainable fruit growers with strict quality control from seed to bottle.',
      icon: FiCheckCircle
    },
    {
      title: 'Instant Refreshment',
      desc: 'A perfectly balanced ratio of fruit sugars and electrolytes designed to revitalize your day.',
      icon: FiZap
    },
    {
      title: 'Trusted Quality',
      desc: 'ISO 22000 certified bottling facilities equipped with state-of-the-art aseptic processing technology.',
      icon: FiShield
    },
    {
      title: 'Affordable Luxury',
      desc: 'Enjoy international 5-star beverage standard at a price accessible for daily wholesome hydration.',
      icon: FiTag
    },
    {
      title: 'Quality Manufacturing',
      desc: 'Precision cold-chain logistics preserving maximum nutritional value and peak freshness in every batch.',
      icon: FiSettings
    }
  ];

  return (
    <section className={`section-padding ${styles.whySection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">THE MEO MIX DIFFERENCE</div>
          <h2 className="heading-1">
            Why Millions <span className="gradient-text">Love Meo Mix</span>
          </h2>
          <p className={styles.subtext}>
            Built on transparency, authentic taste, and world-class bottling standards.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={styles.featureCard}
              >
                <div className={styles.iconBox}>
                  <IconComp />
                </div>
                <h3 className={styles.cardTitle}>{feat.title}</h3>
                <p className={styles.cardDesc}>{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
