import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AboutSection } from '../../landing/components/AboutSection/AboutSection';
import { FacilitySection } from '../components/FacilitySection/FacilitySection';
import { VisionMission } from '../../landing/components/VisionMission/VisionMission';
import { WhyChoose } from '../../landing/components/WhyChoose/WhyChoose';
import { ManufacturingQualitySection } from '../components/ManufacturingQualitySection/ManufacturingQualitySection';
import { OurTeam } from '../components/OurTeam/OurTeam';
import { ValuesSection } from '../components/ValuesSection/ValuesSection';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About MEO MIX | Corporate Overview, Story & Leadership</title>
        <meta name="description" content="Learn about MEO MIX manufactured by Empire Foods & Beverages. Explore our heritage since 1994, mission, vision, corporate values, and leadership team." />
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

      {/* Main Narrative & Story Sections */}
      <div className={styles.aboutContentWrapper}>
        {/* OUR STORY / About Meo Mix Overview (Placed Directly Below Video) */}
        <AboutSection />

        {/* Welcome to MEO MIX Showcase Section */}
        <FacilitySection />

        {/* Dedicated Our Mission & Our Vision Section */}
        <VisionMission />
        
        {/* Why Choose Meo Mix (10 Key Pillars) */}
        <WhyChoose />
        
        {/* Dedicated Manufacturing Excellence & Quality Assurance Section */}
        <ManufacturingQualitySection />

        {/* Executive Leadership Team (Jiten Patel, Harshil Patel, Maulik Patel) */}
        <OurTeam />

        {/* Corporate Values & Sustainability */}
        <ValuesSection />
      </div>
    </>
  );
};
