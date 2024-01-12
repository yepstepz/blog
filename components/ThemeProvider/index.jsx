"use client";

import { createContext, useState, useEffect, useRef } from 'react';

const LIGHT = 'light';
const DARK = 'dark';

export const ThemeProviderContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT);
  const firstLoad = useRef(null);

  useEffect(() => {
    let currentTheme = theme;
    if (firstLoad.current === null) {
      firstLoad.current = true;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = DARK;
        setTheme(currentTheme);
      }

      const currentStorageTheme = localStorage.getItem('theme');
      if (currentStorageTheme && currentTheme !== currentStorageTheme) {
        currentTheme = currentStorageTheme;
        setTheme(currentStorageTheme);
      }
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === LIGHT ? DARK : LIGHT;
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
};
