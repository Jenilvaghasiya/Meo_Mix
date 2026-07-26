import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FLAVORS } from '../../../shared/constants/flavors';
import { SearchInput } from '../../../shared/components/SearchInput/SearchInput';
import { Button } from '../../../shared/components/Button/Button';
import { Modal } from '../../../shared/components/Modal/Modal';
import styles from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const filteredFlavors = FLAVORS.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Our Product Collection | MEO MIX</title>
        <meta name="description" content="Discover the full lineup of MEO MIX premium fruit beverage flavors. Delicious taste in every bottle." />
      </Helmet>

      {/* Top Full-Bleed Video Hero Section for Products Page */}
      <section data-transparent-nav="true" className={styles.productVideoHero}>
        <video
          className={styles.productVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Video/Meo_Mix_Product.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <div className="glass-pill" style={{ color: '#0D5C9F', borderColor: 'rgba(13, 92, 159, 0.25)' }}>
            FULL BEVERAGE CATALOG
          </div>
          <h1 className="heading-display">
            The Meo Mix <span className="gradient-text">Collection</span>
          </h1>
          <p className={styles.leadText}>
            Explore our 8 masterfully crafted fruit beverage creations, bottled with aseptic cold-chain perfection.
          </p>

          <div className={styles.searchWrapper}>
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onClear={() => setSearchTerm('')}
              placeholder="Search by flavor (e.g. Mango, Lychee, Nimbu)..."
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className={styles.productsGridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredFlavors.map((flavor, idx) => (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -8 }}
                className={styles.productCard}
              >
                <div className={styles.cardHeader}>
                  {flavor.badge ? (
                    <span className={styles.badge}>{flavor.badge}</span>
                  ) : (
                    <span className={styles.badgeSpacer} />
                  )}
                  <span className={styles.volumeTag}>160ML</span>
                </div>

                <div className={styles.bottleImgHolder}>
                  <div className={styles.ambientGlow} style={{ background: flavor.solidBg }} />
                  <img src={flavor.bottleImg} alt={flavor.name} className={styles.bottleImg} />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.flavorTitle}>{flavor.name}</h3>
                  <p className={styles.tagline}>{flavor.tagline}</p>
                  <p className={styles.desc}>{flavor.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.priceMeta}>
                    <span className={styles.priceLabel}>Price</span>
                    <span className={styles.priceVal}>Rs. 10</span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedFlavor(flavor)}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className={styles.productFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.featuresHeader}>
            <div className="glass-pill">QUALITY PROMISE</div>
            <h2 className="heading-1">
              Product <span className="gradient-text">Features</span>
            </h2>
            <p className={styles.featuresLeadText}>
              Our fruit beverages are crafted to deliver refreshing taste with the goodness of real fruit pulp.
            </p>
          </div>

          <div className={styles.productFeaturesGrid}>
            {[
              { title: 'Fruit Pulp Based', desc: 'Crafted using quality fruit pulp for authentic taste.' },
              { title: 'Rich & Refreshing Taste', desc: 'Curated fruit formulations bursting with refreshment.' },
              { title: 'Ready to Drink', desc: 'Convenient 160ml bottled refreshment for any time of day.' },
              { title: 'Hygienically Packed', desc: 'Bottled in aseptic automated facilities under strict standards.' },
              { title: 'For All Age Groups', desc: 'Delicious, safe fruit beverages enjoyed by kids & adults alike.' },
              { title: 'Premium Packaging', desc: 'Vibrant oxygen-barrier bottle packaging preserving freshness.' },
              { title: 'Manufactured Under Standards', desc: 'ISO certified quality control from raw material to dispatch.' }
            ].map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={styles.featureItemCard}
              >
                <div className={styles.checkIconBullet}>✓</div>
                <div>
                  <h4 className={styles.featureItemTitle}>{feat.title}</h4>
                  <p className={styles.featureItemDesc}>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Detail Modal */}
      <Modal
        isOpen={!!selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
        title={selectedFlavor?.name || 'Flavor Details'}
      >
        {selectedFlavor && (
          <div className={styles.modalSplitContent}>
            {/* Left Side: Bottle Image Showcase */}
            <div className={styles.modalLeftImgBox}>
              <div className={styles.modalGlow} style={{ background: selectedFlavor.solidBg }} />
              <img src={selectedFlavor.bottleImg} alt={selectedFlavor.name} className={styles.modalBottleImg} />
            </div>

            {/* Right Side: Flavor Details & Nutrition */}
            <div className={styles.modalRightDetails}>
              <div className={styles.modalHeaderRow}>
                <span className={styles.modalBadge}>{selectedFlavor.badge}</span>
                <span className={styles.modalVolumeTag}>160ML</span>
              </div>
              <h3 className={styles.modalTitle}>{selectedFlavor.name}</h3>
              <p className={styles.modalTagline}>{selectedFlavor.tagline}</p>
              <p className={styles.modalDesc}>{selectedFlavor.description}</p>
              
              <div className={styles.nutritionGrid}>
                <div className={styles.nutriBox}>
                  <span className={styles.nutriLabel}>Volume</span>
                  <span className={styles.nutriVal}>160ml</span>
                </div>
                <div className={styles.nutriBox} style={{ background: '#E8F7EA', borderColor: 'rgba(57, 181, 74, 0.2)' }}>
                  <span className={styles.nutriLabel} style={{ color: '#2E7D32' }}>Price</span>
                  <span className={styles.nutriVal} style={{ color: '#39B54A' }}>Rs. 10</span>
                </div>
                <div className={styles.nutriBox} style={{ background: '#FFF5E6', borderColor: 'rgba(255, 138, 0, 0.2)' }}>
                  <span className={styles.nutriLabel} style={{ color: '#D97706' }}>Energy</span>
                  <span className={styles.nutriVal} style={{ color: '#FF8A00' }}>{selectedFlavor.nutrition.calories}</span>
                </div>
                <div className={styles.nutriBox}>
                  <span className={styles.nutriLabel}>Vitamin C</span>
                  <span className={styles.nutriVal}>{selectedFlavor.nutrition.vitaminC}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
