import React from 'react';
import styles from './VideoSection.module.scss';

export const VideoSection = () => {
  return (
    <section data-transparent-nav="true" className={styles.fullBleedVideoSection}>
      {/* Full Bleed Edge-To-Edge Video */}
      <video
        className={styles.fullScreenVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Video/Meo_MIx_Video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Subtle Overlay Gradient */}
      <div className={styles.fullVideoOverlay} />
    </section>
  );
};
