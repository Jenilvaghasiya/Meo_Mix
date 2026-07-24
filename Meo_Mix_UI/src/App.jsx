import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FlavorProvider } from './shared/context/FlavorContext';
import { AppRoutes } from './routes/AppRoutes';
import './styles/globals.scss';

export function App() {
  return (
    <HelmetProvider>
      <FlavorProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </FlavorProvider>
    </HelmetProvider>
  );
}

export default App;
