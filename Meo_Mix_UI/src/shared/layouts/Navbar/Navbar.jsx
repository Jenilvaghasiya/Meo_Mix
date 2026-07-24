import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { Button } from '../../components/Button/Button';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const transparentSections = document.querySelectorAll('[data-transparent-nav="true"]');
      let overVideo = false;

      transparentSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          overVideo = true;
        }
      });

      setIsOverVideo(overVideo);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Product', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Distributors', path: '/distributors' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className={`${styles.navbarHeader} ${isOverVideo ? styles.forceTransparent : (isScrolled ? styles.scrolled : '')}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <img
            src="/logo/meo_mix_logo.png"
            alt="MEO MIX Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation Aligned to Right */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={styles.mobileNavLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
