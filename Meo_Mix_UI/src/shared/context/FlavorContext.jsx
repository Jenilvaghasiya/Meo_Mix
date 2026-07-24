import React, { createContext, useContext, useState, useEffect } from 'react';
import { FLAVORS } from '../constants/flavors';

const FlavorContext = createContext();

export const FlavorProvider = ({ children }) => {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]); // Default Mango
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

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
