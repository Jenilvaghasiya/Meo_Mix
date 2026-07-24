import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { Button } from '../../../../shared/components/Button/Button';
import { Modal } from '../../../../shared/components/Modal/Modal';
import { Input } from '../../../../shared/components/Input/Input';
import styles from './DistributorCTA.module.scss';

export const DistributorCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    businessName: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', city: '', businessName: '' });
    }, 2500);
  };

  return (
    <section id="distributor-section" className={`section-padding ${styles.ctaSection}`}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.ctaCard}
        >
          <div className={styles.cardContent}>
            <div className="glass-pill" style={{ color: '#063A66' }}>
              DISTRIBUTION OPPORTUNITY
            </div>

            <h2 className={styles.title}>
              Partner With <br />
              <span>Empire Foods & Beverages</span>
            </h2>
            <p className={styles.desc}>
              Join India's fastest growing premium fruit juice network. Benefit from high profit margins, marketing collateral support, and guaranteed supply chain reliability.
            </p>
            <div className={styles.ctaBtnHolder}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setModalOpen(true)}
                icon={FiArrowRight}
              >
                Apply For Dealership
              </Button>
            </div>
          </div>

          {/* Right Side: Meo Mix White Brand Logo */}
          <div className={styles.logoShowcase}>
            <img
              src="/logo/meo_mix_logo_white.png"
              alt="MEO MIX White Logo"
              className={styles.ctaRightWhiteLogo}
            />
          </div>
        </motion.div>
      </div>

      {/* Distributor Application Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Become an Official Meo Mix Distributor"
      >
        {submitted ? (
          <div className={styles.successState}>
            <FiCheckCircle className={styles.successIcon} />
            <h3>Application Received!</h3>
            <p>Thank you! Our regional business development team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form className={styles.inquiryForm} onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Phone Number"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              label="Target City / Region"
              placeholder="e.g. Mumbai / Ahmedabad"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
            <Input
              label="Firm / Agency Name"
              placeholder="e.g. Apex Enterprise Pvt Ltd"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
            <Button type="submit" variant="primary" fullWidth icon={FiArrowRight}>
              Submit Partner Application
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
};
