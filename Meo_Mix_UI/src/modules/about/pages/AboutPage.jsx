import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AboutSection } from '../../landing/components/AboutSection/AboutSection';
import { WhyChoose } from '../../landing/components/WhyChoose/WhyChoose';
import { WaveDivider } from '../../../shared/components/WaveDivider/WaveDivider';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About MEO MIX® | Premium Beverage Heritage</title>
        <meta name="description" content="Learn about MEO MIX® commitment to premium fruit beverages, aseptic cold-chain bottling, and quality standards." />
      </Helmet>

      {/* Clean Full-Screen Edge-To-Edge Video (No Text Overlay, No White Margins) */}
      <section data-transparent-nav="true" className={styles.aboutVideoHero}>
        <video
          className={styles.aboutVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/Video/Meo_Mix_about.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </section>

      {/* Second Section: OUR HERITAGE & PASSION */}
      <div>
        <AboutSection />
        <WaveDivider flip />
        <WhyChoose />
      </div>
    </>
  );
};
