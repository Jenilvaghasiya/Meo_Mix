import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiHeart, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  const stats = [
    { label: 'Monthly Bottles Served', value: '10,00,000+', icon: FiAward, color: '#FF8A00' },
    { label: 'Indian States Served', value: '8+ States', icon: FiTrendingUp, color: '#FFC837' },
    { label: 'Export Countries', value: '4 Countries', icon: FiHeart, color: '#FF6FA8' },
    { label: 'Industry Experience', value: 'Since 1994', icon: FiShield, color: '#49B649' }
  ];

  // Featured Bottle Showcase featuring Musk Melon & Pink Guava
  const bottles = [
    {
      src: '/products/pink_guava_bottle.webp',
      alt: 'Meo Mix Pink Guava Bottle',
      className: styles.leftTrioBottle,
      animateY: [0, -18, 0],
      animateRotate: [-8, -4, -8],
      duration: 4.6,
      delay: 0.4
    },
    {
      src: '/products/muskmelon_bottle.webp',
      alt: 'Meo Mix Musk Melon Bottle',
      className: styles.centerTrioHero,
      animateY: [0, -22, 0],
      animateRotate: [0, 2.5, 0, -2.5, 0],
      duration: 4.2,
      delay: 0
    },
    {
      src: '/products/mango_bottle.webp',
      alt: 'Meo Mix Royal Mango Bottle',
      className: styles.rightTrioBottle,
      animateY: [0, -18, 0],
      animateRotate: [8, 4, 8],
      duration: 4.8,
      delay: 0.8
    }
  ];

  // Floating SVGs orbiting the stage
  const floatingFruits = [
    { src: '/fruits/muskmelon_slice.svg', alt: 'Muskmelon Slice', top: '2%', left: '0%', size: '70px', delay: 0, duration: 4.2 },
    { src: '/fruits/guava_slice.svg', alt: 'Guava Slice', top: '8%', right: '2%', size: '65px', delay: 0.8, duration: 5.0 },
    { src: '/fruits/mint_leaf.svg', alt: 'Mint Leaf', bottom: '18%', left: '2%', size: '55px', delay: 1.2, duration: 4.6 },
    { src: '/fruits/mango_slice.svg', alt: 'Mango Slice', bottom: '15%', right: '4%', size: '60px', delay: 0.4, duration: 5.4 }
  ];

  return (
    <section className={styles.aboutSection}>
      {/* Ambient background glow spheres */}
      <div className={styles.bgGlowSphere1} aria-hidden="true" />
      <div className={styles.bgGlowSphere2} aria-hidden="true" />

      <div className={styles.container}>
        {/* Story Section Header */}
        <div className={styles.sectionTopHeader}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.storyBadge}
          >
            OUR STORY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.storyHeaderTitle}
          >
            Every Sip Tells A Story.
          </motion.h2>
        </div>

        <div className={styles.mainGrid}>
          {/* LEFT: Musk Melon & Pink Guava Bottle Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.bottleStageCol}
          >
            <div className={styles.bottleVisualWrap}>
              {/* Backglow radial halo behind bottles */}
              <div className={styles.bottleBackglow} />

              {/* Trio Lineup with Musk Melon in Center & Pink Guava */}
              <div className={styles.bottleTrioStage}>
                {bottles.map((b, index) => (
                  <motion.img
                    key={index}
                    src={b.src}
                    alt={b.alt}
                    className={`${styles.trioBottleImg} ${b.className}`}
                    animate={{
                      y: b.animateY,
                      rotate: b.animateRotate
                    }}
                    transition={{
                      duration: b.duration,
                      delay: b.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Realistic Drop Shadow */}
              <motion.div
                className={styles.bottleShadow}
                animate={{
                  scale: [1, 0.82, 1],
                  opacity: [0.35, 0.18, 0.35]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Orbiting Fruit SVGs */}
              {floatingFruits.map((item, i) => (
                <motion.img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  className={styles.floatingFruitSvg}
                  style={{
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right,
                    width: item.size,
                    height: item.size
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Glass Quality Badge */}
              <div className={styles.heroQualityTag}>
                <span className={styles.tagTitle}>Refreshing Beverage</span>
                <span className={styles.tagSub}>Fresh Musk Melon &amp; Guava</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Narrative & Content */}
          <div className={styles.contentCol}>
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={styles.subHeading}
            >
              Fruit Pulp Based, <span className={styles.orangeGradientText}>Authentic Taste</span>,<br />
              Uncompromised Quality.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={styles.paragraphText}
            >
              Meo Mix is a premium fruit beverage brand proudly manufactured by Empire Foods & Beverages. With strong roots in the fruit industry since 1994, our journey has always focused on delivering beverages that combine authentic fruit taste with uncompromised quality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className={styles.subParagraphText}
            >
              Every bottle is produced in our modern manufacturing facility using advanced technology and stringent quality control systems. From homes to schools, restaurants to retailers, Meo Mix has become a trusted choice across India and international markets.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className={styles.ctaWrapper}
            >
              <a href="/products" className={styles.exploreCtaBtn}>
                <span>Explore Flavours</span>
                <FiArrowRight className={styles.ctaArrowIcon} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM: 4 Premium Glass Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.statsGridContainer}
        >
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={styles.premiumGlassCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle} style={{ color: st.color }}>
                    <IconComp />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.statValue}>{st.value}</span>
                  <span className={styles.statLabel}>{st.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
