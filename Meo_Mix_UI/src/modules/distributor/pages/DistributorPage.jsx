import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiGlobe, FiPackage, FiAward, FiTruck, FiTrendingUp } from 'react-icons/fi';
import { DistributorCTA } from '../../landing/components/DistributorCTA/DistributorCTA';
import { Table } from '../../../shared/components/Table/Table';
import styles from './DistributorPage.module.scss';

export const DistributorPage = () => {
  const tableHeaders = ['Tier / Category', 'Min. Order Qty', 'Margin Guarantee', 'Support Level'];
  const tableData = [
    { tier: 'Taluka / Tehsils Distributor', moq: '600 Cases', margin: '10% - 12%', support: 'Digital Marketing + POP Materials' },
    { tier: 'District Master Stockist', moq: '2000 Cases', margin: '7% - 8%', support: 'Digital Marketing + POP Materials' }
  ];

  const distributorOffers = [
    'Attractive Business Opportunities',
    'Strong Brand Support',
    'Marketing Assistance & Collaterals',
    'Reliable Supply Chain & Logistics',
    'Consistent Product Quality & Freshness'
  ];

  const networkPartners = [
    'Distributors & Wholesalers',
    'Retailers & Supermarkets',
    'Hotels & Restaurants',
    'Schools & Institutions',
    'Convenience Stores'
  ];

  const achievements = [
    { stat: '10,00,000+', label: 'Bottles Served Monthly', desc: 'Consistently supplying millions across India & exports.' },
    { stat: '8 States', label: 'Indian Regional Presence', desc: 'Expanding rapidly across major retail markets.' },
    { stat: '4 Countries', label: 'Global Export Footprint', desc: 'Representing Indian quality in international markets.' },
    { stat: 'Since 1994', label: 'fruit pulp industry Experience', desc: 'Over 30 years of trusted manufacturing heritage.' }
  ];

  return (
    <>
      <Helmet>
        <title>Become Our Distributor & Export Partner | MEO MIX</title>
        <meta name="description" content="Join the growing MEO MIX distribution network. High margins, brand support, reliable supply chain, and international export operations." />
      </Helmet>

      <div className={styles.distributorPageWrapper}>
        {/* Main CTA & Inquiry Form Section */}
        <DistributorCTA />

        {/* Section 1: Distribution Network & Export Grid */}
        <section className={styles.networkExportSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className="glass-pill">EXPANDING FOOTPRINT</div>
              <h2 className="heading-1">
                Distribution Network & <span className="gradient-text">Export Operations</span>
              </h2>
            </div>

            <div className={styles.twoColGrid}>
              {/* Distribution Network Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={styles.networkCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle} style={{ background: '#EEF6FF', color: '#0D5C9F' }}>
                    <FiTruck />
                  </div>
                  <h3 className={styles.cardTitle}>Distribution Network</h3>
                </div>
                <p className={styles.cardParagraph}>
                  Our strong distribution network enables us to efficiently supply products across multiple regions while ensuring consistent product availability.
                </p>
                <p className={styles.cardParagraph}>
                  We continue to expand our footprint by partnering with distributors, wholesalers, retailers, supermarkets, hotels, restaurants, schools, and institutions.
                </p>

                <div className={styles.subListHeader}>We partner with:</div>
                <div className={styles.tagGrid}>
                  {networkPartners.map((item, idx) => (
                    <span key={idx} className={styles.partnerTag}>✓ {item}</span>
                  ))}
                </div>
              </motion.div>

              {/* Export Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={styles.networkCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconCircle} style={{ background: '#E8F7EA', color: '#39B54A' }}>
                    <FiGlobe />
                  </div>
                  <h3 className={styles.cardTitle}>Export Operations</h3>
                </div>
                <p className={styles.cardParagraph}>
                  Meo Mix proudly represents Indian manufacturing quality in international markets.
                </p>
                <p className={styles.cardParagraph}>
                  Our export operations continue to grow as we supply premium fruit beverages to customers across multiple countries while maintaining international food safety and quality standards.
                </p>

                <div className={styles.subListHeader}>What We Offer Distributors:</div>
                <ul className={styles.offerList}>
                  {distributorOffers.map((offer, idx) => (
                    <li key={idx} className={styles.offerItem}>
                      <FiCheckCircle className={styles.checkIcon} />
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Achievements (Growing with Trust) */}
        <section className={styles.achievementsSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className="glass-pill">PROVEN TRACK RECORD</div>
              <h2 className="heading-1">
                Our Achievements <span className="gradient-text">(Growing with Trust)</span>
              </h2>
            </div>

            <div className={styles.achievementsGrid}>
              {achievements.map((st, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={styles.achieveCard}
                >
                  <div className={styles.statNumber}>{st.stat}</div>
                  <div className={styles.statLabel}>{st.label}</div>
                  <p className={styles.statDesc}>{st.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Tiers Table (Perfect Centered Header) */}
        <section className={`section-padding ${styles.partnerTiersSection}`}>
          <div className={styles.container}>
            <div className={styles.tableHeaderBlock}>
              <div className="glass-pill">COMMERCIAL ADVANTAGE</div>
              <h2 className="heading-1">
                Distribution Tiers & <span className="gradient-text">Structure</span>
              </h2>
              <p className={styles.tableSubtext}>
                Clear MOQ requirements, guaranteed profit margins, and marketing collateral support for all regional partners.
              </p>
            </div>
            <div className={styles.tableWrapper}>
              <Table headers={tableHeaders} data={tableData} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
