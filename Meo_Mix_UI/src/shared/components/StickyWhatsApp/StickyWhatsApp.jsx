import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND_INFO } from '../../constants/flavors';
import styles from './StickyWhatsApp.module.scss';

export const StickyWhatsApp = () => {
  const whatsappUrl = BRAND_INFO.socials.whatsapp || 'https://api.whatsapp.com/send/?phone=919099000776&text=Hello%20MEO%20MIX!%20I%20would%20like%20to%20know%20more%20about%20your%20beverage%20products.&type=phone_number&app_absent=0';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={styles.stickyBtn}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <span className={styles.pulseRing} />
      <span className={styles.tooltip}>Chat on WhatsApp</span>
      <FaWhatsapp className={styles.waIcon} />
    </motion.a>
  );
};
