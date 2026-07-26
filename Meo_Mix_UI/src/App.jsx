import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FlavorProvider } from './shared/context/FlavorContext';
import { AppRoutes } from './routes/AppRoutes';
import { Preloader } from './modules/landing/components/Preloader/Preloader';
import './styles/globals.scss';

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <FlavorProvider>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </FlavorProvider>
    </HelmetProvider>
  );
}

export default App;
