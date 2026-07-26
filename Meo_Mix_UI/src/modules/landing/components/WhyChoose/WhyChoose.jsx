import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiHeart, FiTag, FiZap, FiSettings, FiGlobe, FiAward, FiSmile, FiPackage } from 'react-icons/fi';
import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  const features = [
    {
      title: 'Fruit Pulp Based',
      desc: 'Crafted using quality fruit pulp to deliver a rich, authentic, and refreshing beverage experience.',
      icon: FiHeart
    },
    {
      title: 'No Artificial Sweeteners',
      desc: 'Formulated with balanced fruit sugar sweetness without harsh artificial sugar substitutes.',
      icon: FiCheckCircle
    },
    {
      title: 'Delicious Authentic Taste',
      desc: 'Carefully curated recipes that capture the natural essence and delicious taste of sun-ripened fruits.',
      icon: FiSmile
    },
    {
      title: 'Premium Quality Ingredients',
      desc: 'Sourced from trusted suppliers with strict raw material selection and quality testing.',
      icon: FiAward
    },
    {
      title: 'Hygienically Manufactured',
      desc: 'Produced in ultra-hygienic aseptic bottling facilities following strict food safety standards.',
      icon: FiShield
    },
    {
      title: 'Modern Automatic Facility',
      desc: 'Equipped with advanced automated production lines and cold-chain precision systems.',
      icon: FiSettings
    },
    {
      title: 'Strict Quality Control',
      desc: 'Every batch undergoes rigorous quality checks from raw material intake to final packaging.',
      icon: FiZap
    },
    {
      title: 'Affordable Pricing',
      desc: 'Making high-quality, premium fruit beverages accessible and affordable for every consumer.',
      icon: FiTag
    },
    {
      title: 'Trusted by Retailers',
      desc: 'Empowering thousands of retail partners, supermarkets, and institutions across multiple Indian states.',
      icon: FiPackage
    },
    {
      title: 'Growing International Presence',
      desc: 'Exporting to multiple countries while proudly representing Indian manufacturing excellence globally.',
      icon: FiGlobe
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
            Built on transparency, authentic taste, and world-class bottling standards since 1994.
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
                transition={{ duration: 0.5, delay: idx * 0.08 }}
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
