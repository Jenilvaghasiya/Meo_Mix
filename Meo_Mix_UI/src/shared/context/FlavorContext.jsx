import React, { createContext, useContext, useState, useEffect } from 'react';
import { FLAVORS } from '../constants/flavors';

const FlavorContext = createContext();

// All key image assets to pre-cache in memory on app launch
const ASSETS_TO_PRELOAD = [
  '/logo/meo_mix_logo.png',
  '/logo/meo_mix_logo_white.png',
  '/logo/Fruits.png',
  '/products/mango_bottle.png',
  '/products/lychee_bottle.png',
  '/products/orange_bottle.png',
  '/products/pineapple_bottle.png',
  '/products/pink_guava_bottle.png',
  '/products/pomegranate_bottle.png',
  '/products/muskmelon_bottle.png',
  '/products/nimbu_pani_bottle.png',
  '/fruits/mango_slice.svg',
  '/fruits/orange_slice.svg',
  '/fruits/mint_leaf.svg',
  '/fruits/muskmelon_slice.svg',
  '/fruits/guava_slice.svg',
  '/fruits/pineapple_slice.svg'
];

export const FlavorProvider = ({ children }) => {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]); // Default Mango
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Pre-cache all image assets into browser RAM memory immediately on initial app load
  useEffect(() => {
    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const selectFlavor = (flavorId) => {
    const found = FLAVORS.find(f => f.id === flavorId);
    if (found) {
      setActiveFlavor(found);
    }
  };

  return (
    <FlavorContext.Provider value={{
      activeFlavor,
      selectFlavor,
      flavors: FLAVORS,
      cursorPos,
      setCursorPos,
      cursorText,
      setCursorText,
      isHovered,
      setIsHovered
    }}>
      {children}
    </FlavorContext.Provider>
  );
};

export const useFlavor = () => {
  const context = useContext(FlavorContext);
  if (!context) {
    return {
      activeFlavor: FLAVORS[0],
      selectFlavor: () => {},
      flavors: FLAVORS,
      cursorPos: { x: 0, y: 0 },
      setCursorPos: () => {},
      cursorText: '',
      setCursorText: () => {},
      isHovered: false,
      setIsHovered: () => {}
    };
  }
  return context;
};
