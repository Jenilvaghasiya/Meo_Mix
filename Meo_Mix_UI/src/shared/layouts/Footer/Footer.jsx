import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiSend, FiHeart, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { WaveDivider } from '../../components/WaveDivider/WaveDivider';
import { FLAVORS, BRAND_INFO } from '../../constants/flavors';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.container}>
          <div className={styles.topGrid}>
            {/* Brand Info Column */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.logoLink}>
                <img
                  src="/logo/meo_mix_logo_white.png"
                  alt="MEO MIX Logo White"
                  className={styles.footerLogo}
                />
              </Link>
              <p className={styles.brandTagline}>
                {BRAND_INFO?.description}
              </p>

              <div className={styles.socialIcons}>
                <a href={BRAND_INFO?.socials?.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href={BRAND_INFO?.socials?.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FiFacebook />
                </a>
                <a href={BRAND_INFO?.socials?.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Flavors & Range</Link></li>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/distributors">Become a Dealer</Link></li>
                <li><a href="/Brochure/Meo%20Mix%20Brochure.pdf" target="_blank" rel="noopener noreferrer">Brochure (PDF)</a></li>
                <li><Link to="/contact">Contact Support</Link></li>
              </ul>
            </div>

            {/* Flavors Column */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Our Flavors</h4>
              <ul>
                {FLAVORS.slice(0, 6).map((f) => (
                  <li key={f.id}>
                    <Link to="/products">{f.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Official Contact Details Column */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Mobile Number</span>
                    <a href={`tel:${BRAND_INFO.phone}`}>{BRAND_INFO.phone}</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Email Support</span>
                    <a href={`mailto:${BRAND_INFO.supportEmail}`}>{BRAND_INFO.supportEmail}</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Factory & Office</span>
                    <p>Empire Foods & Beverages, Maruti Nandan Ind, Plot No. 2, Lothada, Rajkot - 360022</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FiClock className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Working Hours</span>
                    <p>{BRAND_INFO.workingHours || 'Mon - Sat: 9:00 AM - 6:00 PM'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottomBar}>
            <p>© 2026 MEO MIX. All Rights Reserved. A Product of <strong>Empire Foods & Beverages</strong>.</p>
            <div className={styles.bottomLinks}>
              <Link to="/contact">Privacy Policy</Link>
              <span className={styles.dividerDot}>•</span>
              <Link to="/contact">Terms & Conditions</Link>
              <span className={styles.dividerDot}>•</span>
              <span className={styles.heartText}>
                Crafted with <FiHeart className={styles.heartIcon} /> for fruit drink lovers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
