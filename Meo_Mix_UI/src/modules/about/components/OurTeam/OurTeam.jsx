import React from 'react';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';
import styles from './OurTeam.module.scss';

export const OurTeam = () => {
  const directors = [
    {
      name: 'MR. MAULIK PATEL',
      role: "COMPANY'S CHIEF EXECUTIVE OFFICER (C.E.O.)",
      bio1: 'Mr. Maulik Patel serves as the Managing Director and Chief Executive Officer (C.E.O.) at our esteemed company. A distinguished leader with vision, he leads our strategic growth, product innovation, and beverage brand operations.',
      bio2: 'Mr. Patel assumes a pivotal role, meticulously overseeing quality assurance and conducting comprehensive analyses across all MEO MIX beverages. His leadership and commitment have been instrumental in the continued success and expansion of our business.',
      accentColor: '#39B54A', // Official Logo Green
      initials: 'MP'
    },
    {
      name: 'MR. RAJESH PATEL',
      role: "COMPANY'S CHIEF MANAGING DIRECTOR (C.M.D.)",
      bio1: 'Mr. Rajesh Patel holds the position of Managing Director at our organization. A graduate with a solid educational background, he possesses robust business acumen and extensive industry experience.',
      bio2: 'His multifaceted role encompasses the efficient management of production, marketing, sales, and accounts within the organization. Mr. Patel\'s dynamic leadership contributes significantly to operational excellence across all manufacturing divisions.',
      accentColor: '#0D5C9F', // Official Logo Blue
      initials: 'RP'
    },
    {
      name: 'MR. ASHOK PATEL',
      role: "COMPANY'S CHIEF MARKETING DIRECTOR (C.M.O.)",
      bio1: 'Mr. Ashok Patel assumes the pivotal role of Chief Marketing Officer (C.M.O.) within our organization. Armed with a comprehensive background, he is entrusted with managing market research, strategic planning, and spearheading nationwide sales efforts.',
      bio2: 'His expertise and leadership in critical market engagement strategies ensure dynamic brand visibility. Mr. Patel\'s commitment to excellence plays a key role in driving the company\'s retail expansion across 50+ cities.',
      accentColor: '#39B54A', // Official Logo Green
      initials: 'AP'
    }
  ];

  return (
    <section className={styles.ourTeamSection}>
      <div className={styles.container}>
        {/* Section Header Matching WhyChoose Screenshot Layout */}
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
            A dedicated board of executive directors driving innovation, quality standards, and nationwide expansion.
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
