import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AboutSection } from '../../landing/components/AboutSection/AboutSection';
import { WhyChoose } from '../../landing/components/WhyChoose/WhyChoose';
import { OurTeam } from '../components/OurTeam/OurTeam';
import { FacilitySection } from '../components/FacilitySection/FacilitySection';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About MEO MIX | Premium Beverage Heritage & Our Team</title>
        <meta name="description" content="Learn about MEO MIX commitment to premium fruit beverages, aseptic cold-chain bottling, quality standards, and meet our leadership team." />
      </Helmet>

      {/* Clean Full-Screen Edge-To-Edge Video */}
      <section data-transparent-nav="true" className={styles.aboutVideoHero}>
        <video
          className={styles.aboutVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Video/Meo_Mix_about.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      {/* Main Narrative & Story Sections with Balanced Uniform Spacing */}
      <div className={styles.aboutContentWrapper}>
        <AboutSection />
        
        {/* Why Choose Meo Mix Section */}
        <WhyChoose />
        
        {/* Our Executive Leadership Section */}
        <OurTeam />

        {/* Welcome to MEO MIX & Plant Facility Section */}
        <FacilitySection />
      </div>
    </>
  );
};
