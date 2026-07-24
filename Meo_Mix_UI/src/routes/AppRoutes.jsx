import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../shared/layouts/MainLayout';
import { HomePage } from '../modules/landing/pages/HomePage';
import { ProductsPage } from '../modules/products/pages/ProductsPage';
import { AboutPage } from '../modules/about/pages/AboutPage';
import { DistributorPage } from '../modules/distributor/pages/DistributorPage';
import { ContactPage } from '../modules/contact/pages/ContactPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/distributors" element={<DistributorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
