'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasShown = window.sessionStorage.getItem('portfolio_transition_shown') === '1';

    if (!reducedMotion && !hasShown) {
      window.sessionStorage.setItem('portfolio_transition_shown', '1');
      requestAnimationFrame(() => setIsVisible(true));
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    const timer = setTimeout(() => setIsVisible(false), 1800);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'var(--background)' }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Pulsing orb */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 30px rgba(14,165,233,0.3)',
                  '0 0 60px rgba(14,165,233,0.5)',
                  '0 0 30px rgba(14,165,233,0.3)',
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-cyan-400"
            />

            {/* Progress bar */}
            <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full arctic-gradient rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-sm font-semibold text-slate-400 tracking-wide">
              Loading Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
