import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiClock } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import { Input } from '../../../../shared/components/Input/Input';
import { Button } from '../../../../shared/components/Button/Button';
import { BRAND_INFO } from '../../../../shared/constants/flavors';
import styles from './ContactSection.module.scss';

export const ContactSection = () => {
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({ particleCount: 80, spread: 60 });
    setTimeout(() => {
      setFormSent(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className={`section-padding ${styles.contactSection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">GET IN TOUCH</div>
          <h2 className="heading-1">
            Let's Start A <span className="gradient-text">Conversation</span>
          </h2>
          <p className={styles.subtext}>
            Meo Mix Juice is a premium fruit-based beverage brand offering refreshing taste and quality in every sip.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Info Cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><FiMail /></div>
              <div>
                <h4>Official Email</h4>
                <p>
                  <a href={`mailto:${BRAND_INFO.supportEmail}`} style={{ color: '#10B981', fontWeight: 600 }}>
                    {BRAND_INFO.supportEmail}
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><FiPhone /></div>
              <div>
                <h4>Mobile Number</h4>
                <p>
                  <a href={`tel:${BRAND_INFO.phone}`} style={{ color: '#10B981', fontWeight: 700, fontSize: '1.05rem' }}>
                    {BRAND_INFO.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><FiClock /></div>
              <div>
                <h4>Working Hours</h4>
                <p><span style={{ color: '#10B981', fontWeight: 700 }}>Open Now</span> • {BRAND_INFO.openingHours}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconCircle}><FiMapPin /></div>
              <div>
                <h4>Factory & Corporate Office</h4>
                <p style={{ lineHeight: 1.5 }}>
                  <strong>Empire Foods & Beverages</strong>, Taluka & District:, Maruti Nandan Ind, Plot No. 2, behind Steam Power Enertech Pvt. Ltd, Village:, Lothada, Rajkot, Gujarat 360022, India
                </p>
              </div>
            </div>

            {/* Interactive Location Map Widget */}
            <div className={styles.mapWidget}>
              <iframe
                title="Empire Foods & Beverages Location"
                src="https://maps.google.com/maps?q=Lothada%2C%20Rajkot%2C%20Gujarat%20360022&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="190"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Luxury Form */}
          <div className={styles.formCol}>
            {formSent ? (
              <div className={styles.successBox}>
                <FiCheckCircle className={styles.checkIcon} />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to MEO MIX®. Our team will respond shortly.</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <Input
                  label="Your Full Name"
                  placeholder="e.g. Priyanshu Dave"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />

                <Input
                  type="email"
                  label="Email Address"
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />

                <Input
                  label="Subject"
                  placeholder="e.g. Distribution inquiry / Feedback"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  required
                />

                <div className={styles.textareaGroup}>
                  <label>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your inquiry or thoughts..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className={styles.textarea}
                  />
                </div>

                <Button type="submit" variant="primary" icon={FiSend} fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
