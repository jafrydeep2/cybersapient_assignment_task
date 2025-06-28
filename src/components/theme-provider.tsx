'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useThemeStore, useHydration } from '@/lib/store';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDark } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  
  // Hydrate the store
  useHydration();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark, mounted]);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{}}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 