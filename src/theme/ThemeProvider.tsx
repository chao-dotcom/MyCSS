import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as SCThemeProvider, createGlobalStyle } from 'styled-components';
import { DesignTokens, lightTheme, darkTheme } from '../tokens/theme';

type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  mode: ThemeMode;
  tokens: DesignTokens;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useThemeMode = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider');
  return ctx;
};

export const ThemeProvider: React.FC<{ initialMode?: ThemeMode; children: React.ReactNode }> = ({
  initialMode,
  children,
}) => {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useState<ThemeMode>(initialMode ?? (prefersDark ? 'dark' : 'light'));

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ds-theme');
      if (stored === 'light' || stored === 'dark') setMode(stored);
    } catch (e) {
      // ignore storage access issues
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('ds-theme', mode);
    } catch (e) {
      // ignore storage write issues
    }
  }, [mode]);

  const tokens = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);
  const value = useMemo<ThemeContextValue>(() => ({ mode, tokens, toggle: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')) }), [mode, tokens]);

  const GlobalFocus = createGlobalStyle`
    *:focus-visible {
      outline: 2px solid ${tokens.colors.primary};
      outline-offset: 2px;
    }
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap');
    html, body {
      background: linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(250,250,252,1) 100%);
      color: ${tokens.colors.text};
      font-family: 'Manrope', ${tokens.typography.fontFamily};
      font-weight: ${tokens.typography.fontWeight};
      letter-spacing: 0.2px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: 800;
      letter-spacing: 0.4px;
      margin: 0 0 ${tokens.spacing.md} 0;
    }
    p { margin: 0 0 ${tokens.spacing.md} 0; }
  `;

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={tokens}>
        <GlobalFocus />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};


