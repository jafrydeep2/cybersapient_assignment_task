import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect } from 'react';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: 'theme-storage',
      skipHydration: true,
    }
  )
);

// Hook to manually hydrate the store
export const useHydration = () => {
  useEffect(() => {
    useThemeStore.persist.rehydrate();
  }, []);
}; 