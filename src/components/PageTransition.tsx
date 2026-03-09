'use client';

import { useEffect, useState } from 'react';

const loadingLines = [
  { text: 'Initializing Security_Framework...', delay: 0 },
  { text: 'Loading Encryption_Modules...', delay: 400 },
  { text: 'Booting AI_Systems...', delay: 800 },
  { text: 'Deploying Cybersecurity_Defense...', delay: 1200 },
  { text: 'Establishing Secure_Connection...', delay: 1600 },
  { text: 'Initializing Portal...', delay: 2000, ok: true },
];

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasShown = window.sessionStorage.getItem('portfolio_transition_shown') === '1';
    return !(reducedMotion || hasShown);
  });
  const [isFading, setIsFading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [visibleLineCount, setVisibleLineCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    window.sessionStorage.setItem('portfolio_transition_shown', '1');
    const startTimer = setTimeout(() => setIsStarted(true), 0);
    const lineTimer = setInterval(() => {
      setVisibleLineCount((count) => Math.min(count + 1, loadingLines.length));
    }, 400);
    const fadeTimer = setTimeout(() => setIsFading(true), 2800);
    const hideTimer = setTimeout(() => setIsVisible(false), 3600);

    return () => {
      clearTimeout(startTimer);
      clearInterval(lineTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black">
        {/* Scan-line overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 animate-scan-line-fast" />
        </div>
      </div>

      {/* Centered terminal card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="border-2 border-red-500 bg-black/90 backdrop-blur-sm p-6 rounded-lg w-full max-w-md shadow-2xl shadow-red-500/40 animate-glow-pulse">
          {/* Title bar */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.15s' }} />
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <span className="ml-3 text-red-400 text-xs font-mono font-bold tracking-wider">
              SYSTEM_INITIALIZATION.exe
            </span>
          </div>

          {/* Log lines */}
          <div className="font-mono text-sm space-y-2 min-h-[10rem]">
            {loadingLines.map((line, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-1 transition-all duration-300 ${
                  idx < visibleLineCount
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                <span className="text-green-400">&gt;</span>
                <span className="text-red-400">{line.text}</span>
                {line.ok && idx < visibleLineCount && (
                  <span className="text-green-400 font-bold ml-1">[OK]</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="bg-slate-900 border border-red-500/40 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                style={{ width: isStarted ? '100%' : '0%', transitionDuration: '2500ms' }}
              />
            </div>

            {/* ASCII bar + percentage */}
            <div className="mt-2 text-xs font-mono text-red-300">
              <span>{isStarted ? '[████████████████████] 100%' : '[░░░░░░░░░░░░░░░░░░░░] 0%'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
