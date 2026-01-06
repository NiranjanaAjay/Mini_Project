import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState(systemColorScheme || 'light');
  const [theme, setTheme] = useState(
    systemColorScheme === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    setTheme(mode === 'dark' ? darkTheme : lightTheme);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  const value = {
    mode,
    theme,
    toggleTheme,
    colors: theme.colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider');
  }
  return context;
};