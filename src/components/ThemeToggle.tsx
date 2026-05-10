'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, hydrated, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const sunOpacity = !hydrated ? 'opacity-70' : isDark ? 'opacity-40' : 'opacity-100';
  const moonOpacity = !hydrated ? 'opacity-70' : isDark ? 'opacity-100' : 'opacity-40';

  return (
    <button
      onClick={toggleTheme}
      aria-label={hydrated ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle color mode'}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1 bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-sky-400 dark:hover:border-sky-400"
    >
      {/* Sun icon */}
      <span className={`absolute left-1.5 text-xs transition-opacity duration-300 ${sunOpacity}`}>
        ☀️
      </span>
      {/* Moon icon */}
      <span className={`absolute right-1.5 text-xs transition-opacity duration-300 ${moonOpacity}`}>
        🌙
      </span>
      {/* Sliding knob */}
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow-md z-10"
        animate={{ x: hydrated && isDark ? 26 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
