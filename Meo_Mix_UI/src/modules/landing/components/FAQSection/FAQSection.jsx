import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import styles from './FAQSection.module.scss';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What makes MEO MIX beverages so delicious and high quality?',
      a: 'MEO MIX is manufactured by Empire Foods & Beverages using quality fruit pulp, premium ingredients, and strict food safety standards. With heritage in the fruit industry since 1994, our modern automated facility ensures consistent quality, freshness, and delicious taste in every bottle.'
    },
    {
      q: 'What is the shelf life of Meo Mix beverages?',
      a: 'Thanks to state-of-the-art aseptic pasteurization and oxygen-barrier bottle packaging, unopened Meo Mix bottles maintain peak freshness for 6 months at room temperature.'
    },
    {
      q: 'Are all 8 flavors available across India?',
      a: 'Yes, our nationwide logistics network covers over 50 major cities and regional retail centers. You can also order directly via our authorized distributor portal.'
    },
    {
      q: 'How can I become a retail stockist or regional distributor?',
      a: 'Scroll to our "Distributor CTA" section or fill out the dealership application modal. Our commercial partner team will review your business requirements within 24 hours.'
    },
    {
      q: 'Is Meo Mix suitable for kids and health-conscious adults?',
      a: 'Absolutely! Our formulations prioritize balanced fruit flavor and essential vitamins like Vitamin C, making it a refreshing beverage for the entire family.'
    }
  ];

  return (
    <section className={`section-padding ${styles.faqSection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="heading-1">
            Everything You Need <span className="gradient-text">To Know</span>
          </h2>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
                <button
                  className={styles.questionBtn}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className={styles.chevronIcon} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answerText}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
