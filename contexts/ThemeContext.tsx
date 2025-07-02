
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        return storedTheme; // Respect user's explicit choice
      }
      // If no stored theme, default to dark.
      // Could also check window.matchMedia('(prefers-color-scheme: dark)').matches here
      // but defaulting to dark makes it the "main" theme as requested.
      return 'dark'; 
    }
    return 'dark'; // Default for server-side rendering or non-browser env
  });

  useEffect(() => {
    const root = window.document.documentElement; // <html> element
    const body = window.document.body;

    const lightModeBodyClasses = ['bg-gray-50', 'text-gray-900'];
    const darkModeBodyClasses = ['bg-dark-bg', 'text-dark-text-primary'];

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.remove(...lightModeBodyClasses);
      body.classList.add(...darkModeBodyClasses);
    } else {
      root.classList.remove('dark');
      body.classList.remove(...darkModeBodyClasses);
      body.classList.add(...lightModeBodyClasses);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};