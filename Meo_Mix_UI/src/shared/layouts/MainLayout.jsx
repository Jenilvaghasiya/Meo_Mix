import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { LiquidCanvas } from '../../modules/canvas/LiquidCanvas';
import { CustomCursor } from '../components/CustomCursor/CustomCursor';
import { StickyWhatsApp } from '../components/StickyWhatsApp/StickyWhatsApp';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';
import { useLenis } from '../hooks/useLenis';

export const MainLayout = () => {
  const { pathname } = useLocation();
  useLenis(); // Initialize smooth scroll

  // Automatically scroll to top (0, 0) on every page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="app-main-layout">
      <CustomCursor />
      <LiquidCanvas />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <StickyWhatsApp />
      <ScrollToTop />
      <Footer />
    </div>
  );
};
