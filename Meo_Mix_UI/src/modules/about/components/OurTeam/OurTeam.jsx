import React from 'react';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';
import styles from './OurTeam.module.scss';

export const OurTeam = () => {
  const directors = [
    {
      name: 'MR. JITEN PATEL',
      role: 'FOUNDER & MANAGING PARTNER',
      bio1: 'With over 30 years of experience in the fruit pulp industry since 1994, Jiten Patel has been the driving force behind the company’s foundation.',
      bio2: 'His deep industry knowledge, commitment to quality, and long-term vision have played a vital role in building Meo Mix into a trusted beverage brand.',
      accentColor: '#39B54A', // Logo Green
      initials: 'JP'
    },
    {
      name: 'MR. HARSHIL PATEL',
      role: 'FOUNDER & MANAGING PARTNER',
      bio1: 'Harshil Patel brings strong expertise in Food Science, Nutrition, and Microbiology, contributing significantly to product research, formulation, and quality development.',
      bio2: 'His technical knowledge ensures that every Meo Mix product meets high standards of taste, nutrition, and safety.',
      accentColor: '#0D5C9F', // Logo Blue
      initials: 'HP'
    },
    {
      name: 'MR. MAULIK PATEL',
      role: 'CO-FOUNDER & MANAGING PARTNER',
      bio1: 'Maulik Patel leads the company’s Sales, Marketing, and Business Development initiatives.',
      bio2: 'With extensive experience in market expansion, branding, and distribution management, he has been instrumental in strengthening Meo Mix’s presence across multiple states and international markets.',
      accentColor: '#39B54A', // Logo Green
      initials: 'MP'
    }
  ];

  return (
    <section className={styles.ourTeamSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.teamBadge}
          >
            OUR LEADERSHIP
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.sectionTitle}
          >
            Meet Our <span className={styles.blueHighlight}>Leadership Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.sectionSubtitle}
          >
            A dedicated team of visionary founders and industry experts driving innovation, quality, and global expansion.
          </motion.p>
        </div>

        {/* Vertical Stacked Executive Rows */}
        <div className={styles.directorsList}>
          {directors.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={styles.directorRow}
            >
              {/* Left Column: Photo Container with Offset Accent Frame */}
              <div className={styles.photoCol}>
                <div className={styles.offsetFrameWrapper} style={{ '--frame-accent': person.accentColor }}>
                  <div className={styles.photoCard}>
                    <div className={styles.photoAvatarInner} style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)' }}>
                      <FiUser className={styles.userIcon} />
                      <span className={styles.initialsText}>{person.initials}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Details & Narrative */}
              <div className={styles.infoCol}>
                <h3 className={styles.directorName}>{person.name}</h3>
                <h4 className={styles.directorRole}>{person.role}</h4>
                
                <p className={styles.directorBio}>{person.bio1}</p>
                <p className={styles.directorBio}>{person.bio2}</p>

                {/* Accent Underline Bar */}
                <div className={styles.accentUnderlineBar} style={{ backgroundColor: person.accentColor }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
