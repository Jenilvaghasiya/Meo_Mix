import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';
import { Modal } from '../../../../shared/components/Modal/Modal';
import styles from './GallerySection.module.scss';

export const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    { title: 'Alphonso Mango Harvest', flavor: 'Mango', volume: '160ml • Rs. 10', img: '/products/mango_bottle.webp' },
    { title: 'Lush Lychee Blossom', flavor: 'Lychee', volume: '160ml • Rs. 10', img: '/products/lychee_bottle.webp' },
    { title: 'Valencia Orange Grove', flavor: 'Orange', volume: '160ml • Rs. 10', img: '/products/orange_bottle.webp' },
    { title: 'Golden Hawaiian Pineapple', flavor: 'Pineapple', volume: '160ml • Rs. 10', img: '/products/pineapple_bottle.webp' },
    { title: 'Pink Guava Orchard', flavor: 'Pink Guava', volume: '160ml • Rs. 10', img: '/products/pink_guava_bottle.webp' },
    { title: 'Ruby Pomegranate Arils', flavor: 'Pomegranate', volume: '160ml • Rs. 10', img: '/products/pomegranate_bottle.webp' },
    { title: 'Crisp Musk Melon Breeze', flavor: 'Musk Melon', volume: '160ml • Rs. 10', img: '/products/muskmelon_bottle.webp' },
    { title: 'Classic Nimbu Paani Zest', flavor: 'Nimbu Paani', volume: '160ml • Rs. 10', img: '/products/nimbu_pani_bottle.webp' }
  ];

  return (
    <section className={`section-padding ${styles.gallerySection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">ORCHARD TO BOTTLE</div>
          <h2 className="heading-1">
            Visual <span className="gradient-text">Gallery</span>
          </h2>
          <p className={styles.subtext}>
            Explore our complete lineup of all 8 MEO MIX products captured in high-definition luxury showcase.
          </p>
        </div>

        {/* Symmetrical 8 Product Grid */}
        <div className={styles.productGrid}>
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className={styles.galleryCard}
              onClick={() => setSelectedImg(item)}
            >
              <div className={styles.imageBox}>
                <img src={item.img} alt={item.title} className={styles.galleryImg} />
                
                {/* Hover Glass Overlay - Inside Image Box Only */}
                <div className={styles.glassOverlay}>
                  <div className={styles.zoomPill}>
                    <FiZoomIn />
                    <span>Quick View</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <h4 className={styles.flavorName}>{item.flavor}</h4>
                <div className={styles.badgeRow}>
                  <span className={styles.volumeBadge}>160ML</span>
                  <span className={styles.priceBadge}>Rs. 10</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      <Modal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        title={selectedImg?.title || 'Gallery Preview'}
      >
        {selectedImg && (
          <div className={styles.lightboxContent}>
            <img src={selectedImg.img} alt={selectedImg.title} className={styles.previewImg} />
            <p className={styles.previewCaption}>{selectedImg.title} — MEO MIX {selectedImg.flavor} ({selectedImg.volume}).</p>
          </div>
        )}
      </Modal>
    </section>
  );
};
